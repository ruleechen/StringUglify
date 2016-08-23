using HtmlAgilityPack;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Text;

namespace StringUglify
{
    class Program
    {
        static void Main(string[] args)
        {
            var json = File.ReadAllText("strings.js");
            var start = json.IndexOf("{");
            var prefix = json.Substring(0, start);
            json = json.Substring(start);
            json = json.Trim(';');

            var result = prefix + ProcessJson(json) + ";";
            File.WriteAllText("result.js", result);

            Console.WriteLine("Done!");
        }

        const string from = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const string tooo = "åƀçðéƒĝĥîĵķļɱñöþǫŕšţûṽŵẋýžÅƁÇÐÉƑĜĤÎĴĶĻṀÑÖÞǪŔŠŢÛṼŴẋÝž";

        static HashSet<string> ignores = new HashSet<string>()
        {
            "STRINGS.NEWMEETING.dateFormat",
            "STRINGS.NEWMEETING.dateMask",
            "STRINGS.NEWMEETING.timeFormat",
            "STRINGS.NEWMEETING.timeMask"
        };

        static string ProcessJson(string json)
        {
            var dict = JsonConvert.DeserializeObject<ExpandoObject>(json);
            ProcessDict(dict, string.Empty);
            return JsonSerializeWithoutQuoteInNames(dict);
        }

        static void ProcessDict(IDictionary<string, object> dict, string parentKey)
        {
            foreach (var key in dict.Keys.ToList())
            {
                var fullKey = string.IsNullOrEmpty(parentKey) ? key : parentKey + "." + key;

                if (ignores.Contains(fullKey))
                {
                    continue;
                }

                var value = dict[key];

                var d = value as IDictionary<string, object>;
                if (d != null)
                {
                    ProcessDict(d, fullKey);
                }
                else
                {
                    var s = value as string;
                    if (s != null)
                    {
                        s = RunReplace(s);
                        dict[key] = s;
                    }
                }
            }
        }

        static string RunReplace(string input)
        {
            if (string.IsNullOrEmpty(input))
            {
                return input;
            }

            if (input.IndexOf("<") > -1)
            {
                var doc = new HtmlDocument();
                doc.LoadHtml(input);
                return RunHtmlNodes(doc.DocumentNode.ChildNodes);
            }
            else
            {
                return Uglify(input);
            }
        }

        static string Uglify(string input)
        {
            var builder = new StringBuilder();

            builder.Append("[");

            for (var i = 0; i < input.Length; i++)
            {
                var chr = input[i];
                var idx = from.IndexOf(chr);
                if (idx > -1)
                {
                    builder.Append(tooo[idx]);
                }
                else
                {
                    if (chr == ' ')
                    {
                        builder.Append("_");
                        builder.Append(chr);
                    }
                    else
                    {
                        builder.Append(chr);
                    }
                }
            }

            builder.Append("_]");

            return builder.ToString();
        }

        static string RunHtmlNodes(IEnumerable<HtmlNode> nodes)
        {
            var builder = new StringBuilder();

            foreach (var node in nodes)
            {
                if (node.NodeType == HtmlNodeType.Text)
                {
                    if (string.IsNullOrWhiteSpace(node.OuterHtml))
                    {
                        builder.Append(node.OuterHtml);
                    }
                    else
                    {
                        builder.Append(Uglify(node.OuterHtml));
                    }
                }
                else if (node.NodeType == HtmlNodeType.Element)
                {
                    if (node.ChildNodes.Any())
                    {
                        var text = RunHtmlNodes(node.ChildNodes);
                        var textNode = HtmlNode.CreateNode(text);
                        node.RemoveAllChildren();
                        node.AppendChild(textNode);
                        builder.Append(node.OuterHtml);
                    }
                    else
                    {
                        builder.Append(node.OuterHtml);
                    }
                }
            }

            return builder.ToString();
        }

        static string JsonSerializeWithoutQuoteInNames(object obj)
        {
            using (var stringWriter = new StringWriter())
            {
                using (var writer = new JsonTextWriter(stringWriter)
                {
                    QuoteName = false,
                    QuoteChar = '\'',
                    Formatting = Formatting.Indented,
                    Indentation = 2
                })
                {
                    new JsonSerializer().Serialize(writer, obj);
                }

                return stringWriter.ToString();
            }
        }
    }
}
