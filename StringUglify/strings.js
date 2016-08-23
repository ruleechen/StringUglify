var localeStrings = {
    STRINGS: {
        GENERAL: {
            today: 'Today',
            unknownCallerId: 'Unknown Caller',
            unknownAuthorId: 'Unknown Author',
            unknownLocation: 'unknown',
            unknownContact: 'Unknown Contact',
            blockedNumber: 'Blocked Number'
        },
        ERROR: {
            unknownContactType: 'Unknown contact type',
            executionQueue: 'Queue is off and can\'t get any more tasks',
            recipientNumber: 'Recipient\'s number is invalid or empty: ',
            ringoutInProgress: 'Ringout is already in progress',
            ringoutNotStarted: 'Ringout has not been started yet',
            callMonitorError: 'callMonitor: DO NOT call execute() from callMonitorProvider',
            unknownQuery: 'Unknown query: ',
            googleAuthError: 'Need to authorize Google Contacts first.',
            googleAuthErrorFastFail: 'Fail Fast: Need to authorize Google Contacts first.',
            mainWindowNull: 'mainWindow is null and there is no active elections',
            tokensExpired: 'Both tokens are expired or unathorized',
            refreshError: 'Unexpected error during refresh',
            numberIncorrect: 'You didn\'t specify the number to call to or the number is incorrect',
            fromNumberIncorrect: 'You didn\'t specify the number to call from or the number is incorrect',
            directNumberError: 'In order to make an out bound call, you need to save your direct phone number under settings',
            commandError: 'Command has already been registered: ',
            invalidDirectNumber: 'Invalid direct number',
            sipOutboundNotAvailable: 'Direct dialing is not supported for your extension. Please contact your account administrator for an upgrade.',
            isBlockedNumber: 'Emergency dialing is not supported.',
            isSpecialNumber: 'Dialing special service numbers is not supported.',
            sipNotRegistered: 'Call with Browser is not available currently due to internal error. Please try again later or switch to Call with your RingCentral phone or other phones in the Settings to place calls.',
            hasAudioDevice: 'Your audio device is either disabled or disconnected. Please check your audio settings.',
            'functionNotEnabled': 'Your account has not permissions to access this function. Please contact your account representative for an upgrade.',
            'noValidPhoneNumberFromLync': 'Could not find valid phone number.'
        },
        HEADER: {
            headerDefault: 'Login to phone system',
            headerWithBrand: 'Login to',
            headerWithTelus: 'TELUS Business Connect\u2122',
            collapseTitle: 'Collapse',
            expandTitle: 'Expand',
            logoutTitle: 'Logout'
        },
        SIDEBAR: {
            dialerTitle: 'Dialer',
            newTextTitle: 'Compose text',
            messagesTitle: 'Messages',
            contactsTitle: 'Contacts',
            callLogTitle: 'Call Log',
            meetingTitle: 'Schedule Meeting',
            conferenceTitle: 'Schedule Conference',
            hangoutsTitle: 'Start Hangout with Conferencing',
            settingsTitle: 'Settings',
            callingSettingsTitle: 'Calling'
        },
        DIRECTIVES: {
            CONTACTPHONE: {
                actionCallTitle: 'Call',
                actionTextTitle: 'Send Text'
            },
            RCSENDSMS: {
                error: {
                    textEmpty: 'Please enter the text to be sent',
                    recipientEmpty: 'Please enter at least one recipient',
                    pagerNotSupported: 'Messages to extension numbers are not supported by your account, please use phone numbers only',
                    smsNotSupported: 'SMS are not supported by your account, please use extension numbers only',
                },
                groupIntoOneConversationCheckbox: 'Group into one conversation',
                sendButton: 'Send',
                textareaPlaceholder: 'Type any text to send'
            },
            CLICKTODIAL: {
                confirmMsg: 'Call this number: %s ?'
            }
        },
        "SERVICES": {
            "NOTIFICATION": {
                'messageFrom': 'Message from %s',
                'faxFrom': 'Fax from %s',
                'pageNumber': 'Number of pages: %s',
                'voicemailFrom': 'Voicemail from %s'
            }
        },
        "LOGIN": {
            'comboUSValue': 'United States',
            'comboUKValue': 'United Kingdom',
            'comboCanadaValue': 'Canada',
            'userNamePlaceholder': 'Phone number',
            'extensionPlaceholder': 'Ext',
            'passwordPlaceholder': 'Password',
            'loginButtonText': 'Login',
            'loginButtonTextOnLoading': 'Login...',
            'loginInternalErrorCaption': 'Internal Error: ',
            'loginInternalErrorAdvice': '',
            'rememberMeCheckbox': 'Remember me',
            'errorPhoneNumberIsEmpty': 'Please enter your Phone number.',
            'errorPasswordIsEmpty': 'Please enter your Password.',
            'errorIncorrectLogin': 'Phone number and password do not match.',
            'errorNetwork': 'Network connection error.<br/>Please try again later.',
            'errorInternal': 'Internal server error.<br/>Please consult RC support.',
            'errorConfigFailed': 'App has failed to configure itself: %s',
            'errorFeatureRequestFailed': 'Unable to receive service features, the app may not be fully functional',
            'errorConferencingRequestFailed': 'Unable to receive conferencing info, the app may not be fully functional',
            'errorExtensionNumberRequestFailed': 'Unable to receive extension number, the app may not be fully functional',
            'errorFlipNumberRequestFailed': 'Unable to receive flip numbers, the app may not be fully functional'
        },
        "SETTINGS": {
            'settingsScreenHeader': 'Settings',
            'desktopNotificationsCheckbox': 'Desktop notifications',
            'clickToDialCheckbox': 'Click to dial',
            'clickToDialWarn': 'Please refresh the page to apply this change.',
            'dialFromExtensionCheckbox': 'Dial from extension',
            'desktopNotificationsConfirmationInfo': 'Please allow or deny desktop notifications',
            'desktopNotificationsDisabledInfo': 'Desktop notifications were disabled for the extension address. If you wish to use the notifications, please <a href="https://support.google.com/chrome/answer/3220216?hl=en" target="_blank">manage them in browser settings</a>',
            'googleContactsCaption': 'Google',
            'outlook365Caption': 'Outlook 365',
            'googleContactsAuthorizeButton': 'Authorize',
            'outlook365AuthorizeButton': 'Authorize',
            'googleContactsAuthorizedText': 'Authorized',
            'outlook365DeauthorizeButton': 'Logout',
            'outlook365AuthorizingButton': 'Authorizing...',
            'googleContactsManageLink': 'Manage',
            'eulaLink': 'End User License Agreement',
            'eulaLinkRead': 'Read',
            'versionInfo': 'App Version',
            'sipVersionInfo': 'SIP Version',
            'outlook365AuthorizedAsLabel': 'Authorized as',
            'outlook365LogoutLink': 'logout'
        },
        "CONTACT": {
            "type": {
                "homePhone": 'Home',
                "businessPhone": 'Business',
                "businessPhone2": 'Business2',
                "mobilePhone": 'Mobile',
                "companyPhone": 'Company',
                "assistantPhone": 'Assistant',
                "callbackPhone": 'Callback',
                "carPhone": 'Car',
                "otherPhone": 'Other',
                "otherFax": 'Fax',
                "businessFax": 'Fax',
                "homePhone2": 'Home2',
                "mainPhone": 'Main',
                "pagerPhone": 'Pager',
                "directPhone": 'Direct'
            },
            'contactScreenHeader': 'Contact Details',
            'googleContactsNotAuthorizedInfo': 'App is not authorized in Google',
            'emailsHeader': 'E-Mail Address',
            'email1Label': 'E-Mail',
            'email2Label': 'E-Mail 2',
            'email3Label': 'E-Mail 3',
            'phoneNumberHeader': 'Phone Number',
            'extensionLabel': 'Extension',
            'home1Label': 'Home',
            'home2Label': 'Home 2',
            'busyness1Label': 'Business',
            'busyness2Label': 'Business 2',
            'mobileLabel': 'Mobile',
            'companyLabel': 'Company',
            'assistantLabel': 'Assistant',
            'carLabel': 'Car',
            'anotherLabel': 'Another',
            'callbackLabel': 'Callback',
            'contactNotFound': 'Contact not found'
        },
        "CONTACTPICKER": {
            'contactPickerScreenHeader': 'Select a Contact',
            'searchPlaceholder': 'Search...',
            'noContactsMessage': 'No contacts to display'
        },
        "CONTACTS": {
            'contactsScreenHeader': 'Contacts',
            'searchPlaceholder': 'Search...',
            'searchContactHint': 'Please type to search a contact',
            'searchContactNotFound': 'No contacts found',
            'googleContactsNotAuthorizedInfo': 'App is not authorized in Google',
            'googleContactsAuthorizeButton': 'Authorize',
            'outlookContactsNotAuthorizedInfo': 'App is not authorized in Outlook 365',
            'outlookContactsAuthorizeButton': 'Authorize',
            'outlookContactsAuthorizingButton': 'Authorizing...'
        },
        "ACTIVECALLMONITOR": {
            'activeCallsCaption': 'Active calls',
            'forwardButton': 'Forward',
            'cancelButton': 'Cancel',
            'backButton': 'Back',
            'okButton': 'Ok',
            'stopButton': 'Stop',
            'forwardLabel': 'Forward this call to:',
            'transferButton': 'Transfer',
            'transferLabel': 'Transfer this call to:',
            'flipButton': 'Flip',
            'flipLabel': 'Flip this call to:',
            'flipEmptyLabel': 'Your flip numbers are not configured.',
            'flipContinueButton': 'Continue flip',
            'flipNumberPlaceholder': 'Choose a Number',
            'recordButton': 'Record',
            'ignoreButton': 'Ignore',
            'holdButton': 'Hold',
            'unholdButton': 'Unhold',
            'muteButton': 'Mute',
            'unmuteButton': 'Unmute',
            'answerButton': 'Answer',
            'hangupButton': 'Hangup',
            'rejectButton': 'Reject',
            'closeButton': 'Close',
            'incomingCallCaption': 'Incoming Call',
            'outgoingCallCaption': 'Outgoing Call',
            'editLinkCaption': 'edit',
            'moreLinkCaption': 'view',
            'refreshPrompt': 'Your in-progress webphone call will be disconnected.',
            'callStatusCalling': 'Calling',
            'callStatusConnecting': 'Connecting',
            'callStatusCallingToBrand': 'Calling your %s device',
            'callStatusWaiting': 'Please press 1 to connect with your party',
            'callStatusCallerConnected': 'Please wait for the other party to answer',
            'callStatusConnected': 'Connected',
            'callStatusCallConnected': 'Call Connected',
            'callStatusCallMute': 'On Mute',
            'callStatusCallFinished': 'Call has finished',
            'callStatusFinished': 'Call Finished',
            'callStatusHold': 'On Hold',
            'keypad': 'Keypad',
            'hold': 'Hold',
            'transfer': 'Transfer',
            'flip': 'Flip',
            'record': 'Record',
            'voicemail': 'Voicemail',
            'completeFlip': 'Complete Flip',
            'flipCallTo': 'Flip call to'
        },
        "RCCARDS": {
            'activityCaption': 'Activity'
        },
        "CALLLOG": {
            'deletePrompt': 'Delete all call records from your account?',
            'deleteDiscard': 'Cancel',
            'deleteConfirm': 'Delete',
            'clearCallLog': 'Clear',
            'callLogScreenHeader': 'Call Log',
            'allCallsTab': 'All',
            'missedCallsTab': 'Missed',
            'allCallsTabTitle': 'Show all calls',
            'missedCallsTabTitle': 'Show only missed calls',
            'searchPlaceholder': 'Search...',
            'noCallsInfo': 'No calls to display'
        },
        "CALLENTRY": {
            'callLogEntryScreenHeader': 'Call Details',
            'noCallsInfo': 'No calls found',
            'incomingCallCaption': 'Incoming Call From',
            'outgoingCallCaption': 'Outgoing Call To',
            'missedCallCaption': 'Missed Call From',
            'callButton': 'Call',
            'textButton': 'Send Text'
        },
        "CONVERSATION": {
            'deleteConversationTooltip': 'Delete',
            'deleteConversationPrompt': 'Delete this conversation?',
            'unknownContact': 'Unknown Contact',
            'messageIsNotSentError': 'Message is not sent',
            'messageIsNotDeliveredError': 'Message is not delivered'
        },
        "DIALER": {
            'toLabel': 'To:',
            'fromLabel': 'From:',
            'dialerScreenHeader': 'Dialer',
            'contactpickerPlacholder': 'Enter Name or Number',
            'connectionError': 'Connection error, probably you are disconnected from the Internet',
            'customError': '%s',
            'ringoutError': 'Ringout error: %s',
            'sipError': 'Your call could not be completed. SIP failure reason: %s',
            'failedToCompleteError': 'Your call could not be completed. Please try again later',
            'cannotReachRCPhoneError': 'Please check if your %s device is available to receive a call and Call Screening is disabled.',
            'callButtonText': 'Call',
            'callButtonTextHangup': 'Hang up',
            'callInProgressButtonText': 'Call is in progress',
            'webphoneModeName': 'Webphone',
            'ringoutModeName': 'Ringout',
            'emergencyUnavailableMessage': 'Emergency calling not available.\n\nIn an emergency, use your traditional wireline or wireless phone to call an emergency number',
            'connectionErrorMessage': 'SIP connection error.\n\n',
            'transferSuccessInfo': 'Your call has been transfered successfully!',
            'flipSuccessInfo': 'Your call has been flipped successfully!'
        },
        'DIALERSETTIGNS': {
            'makeOutboundCallWithOptions': {
                'browser': 'Browser',
                'phone': 'My %s Phone',
                'extension': 'Extension',
                'other': 'Other Phone',
                'custom': 'Custom Phone'
            },
            'errorDirectNumberInvalid': 'Invalid Outbound Caller ID',
            'outboundCallerIdLabel': 'My Outbound Caller ID',
            'myLocationLabel': 'My Location',
            'customNumberLabel': 'My Custom Number',
            'browserDescr': 'Use this option to make and receive calls using your computer’s microphone and speaker.<br/><br/>Selected phone number will be displayed as caller ID to the party you make a call.',
            'rcDescr': 'Use this option to make calls using your %s phone.<br/><br/>For the call you make, your %s phone will ring first then the party you called.<br/><br/>Additionally you can make a selection below on whether to receive incoming calls using your computer’s microphone and speaker.',
            'otherDescr': 'Use this option to make calls using your other phones such as home or cell phones that you have added in your %s Extension.<br/><br/>For the call you make, this phone will ring first then the party you called.<br/><br/>Additionally you can make a selection below on whether to receive incoming calls using your computer’s microphone and speaker.',
            'customDescr': 'Use this option to make calls using any phone of your choice by entering a valid phone number in the field below.<br/><br/>For the call you make, this phone will ring first then the party you called.<br/><br/>Additionally you can make a selection below on whether to receive incoming calls using your computer’s microphone and speaker.',
            'makeOutboundCallWithLabel': 'Make my calls with',
            'makeOutboundCallWithHelp': 'Please choose a device for making an outbound call.<br/><br/>In case you do not have ready access to your RingCentral desk phone or RingCentral softphone, you can use a non RingCentral device such as your cell phone or home phone.',
            'makeOutboundCallWithHelpTelus': 'Please choose a device for making an outbound call.<br/><br/>In case you do not have ready access to your TELUS Business Connect IP Office Phone or TELUS Business Connect Desktop App, you can use another device such as your mobile phone or home phone.',
            'makeOutboundCallWithHelpBT': 'Please choose a device for making an outbound call.<br/><br/>In case you do not have ready access to your BT desk phone or BT softphone, you can use a non BT device such as your cell phone or home phone.',
            'makeOutboundCallWithHelpATTOAH': 'Please choose a device for making an outbound call.<br/><br/>In case you do not have ready access to your AT&T desk phone or AT&T softphone, you can use a non AT&T device such as your cell phone or home phone.',
            'press1ToStartCallLabel': 'Prompt me to dial 1 before connecting the call',
            'receiveIncomingWebPhoneCallsLabel': 'Receive Calls in the Browser',
            'press1ToStartCallHelp': 'Please check this if you want your phone to prompt you to press 1 before ringing the phone you dialed.',
            'makeOutboundCallWithBrowser': 'Browser',
            'makeOutboundCallWithOtherPhone': 'Other phone',
            'sipMainNumber': 'Main company number'
        },
        'NEWSMSSETTIGNS': {
            'invalidNumber': 'No valid phone number to send the text message. Please contact your account representative for an upgrade.',
            'newSmsNumberLabel': 'Send Message From',
            'newSmsNumberHelp': {
                'default': 'Please choose a number to send a message from.',
                'RCUS': 'Please choose a number to send a message from.',
                'Telus': 'Please choose a number to send a message from.',
                'BT': 'Please choose a number to send a message from.',
                'ATTOAH': 'Please choose a number to send a message from.'
            }
        },
        "MESSAGES": {
            'messagesScreenHeader': 'Messages',
            'allTab': 'All',
            'voiceTab': 'Voice',
            'faxTab': 'Fax',
            'textTab': 'Text',
            'searchPlacholer': 'Search...',
            'messageLabel': '',
            'faxLabel': 'Fax Recieved',
            'voiceLabel': 'Voice Message',
            'deleteMessageTitle': 'Delete Message',
            'viewFaxTitle': 'View Fax',
            'deleteFaxTitle': 'Delete Fax',
            'playVoiceTitle': 'Play',
            'resumeVoiceTitle': 'Resume',
            'stopVoiceTitle': 'Stop',
            'callTitle': 'Call',
            'sendTextTitle': 'Send Text',
            'markAsReadTitle': 'Mark as Read',
            'markAsUnreadTitle': 'Mark as Unread',
            'deleteVoiceMailTitle': 'Delete Voicemail',
            'noMessagesMessage': 'The list is empty',
            'downloadVoiceMailTitle': 'Download voicemail message'
        },
        'MESSAGEDETAILS': {
            'activityLabel': 'Last activity',
            'conversationLabel': 'Conversation with',
            'deleteMessageTooltip': 'Delete',
            'deleteMessagePrompt': 'Delete this message?',
            'deleteDiscard': 'Cancel',
            'deleteConfirm': 'Delete',
            'messageDetailsScreenHeader': 'Message Details',
            'conversationDetailsScreenHeader': 'Conversation Details',
            'noMessagesFoundText': 'No messages found',
            'voiceMessageLabel': 'Voice Message From',
            'faxMessageLabel': 'Fax Message From',
            'outgoingMessageLabel': 'Outgoing Message To',
            'incomingMessageLabel': 'Incoming Message From',
            'callButtonText': 'Call',
            'sendTextButtonText': 'Send Text'
        },
        'MESSAGE_STATUS': {
            'default': '',
            'Received': 'Received',
            'Queued': 'Queued',
            'Sent': 'Sent',
            'SendingFailed': 'Sending Failed',
            'Delivered': 'Delivered',
            'DeliveryFailed': 'Delivery Failed'
        },
        "NEWSMS": {
            'toLabel': 'To:',
            'newSmsScreenHeader': 'Compose Message',
            'contactpickerPlaceholder': 'Enter Name or Number'
        },
        "NEWCONFERENCE": {
            'newConferenceScreenHeader': 'New Conference',
            'dialInNumberLabel': 'Dial-in Number:',
            'hostLabel': 'Host:',
            'participantsLabel': 'Participants:',
            'internationalParticipantsCheckbox': 'International participants',
            'selectInternationalParticipantsHeader': 'Select International Dial-in Numbers',
            'searchLyncContactOnly': 'Search Skype for Business Contacts Only',
            'searchPlaceholder': 'Search...',
            'inviteButtonTextGoogle': 'Invite with Google Calendar',
            'inviteButtonTextOutlook': 'Save in Calendar',
            'inviteButtonTextLyncTelus': 'Invite with Skype for Business & Start Call',
            'inviteButtonTextLync': 'Invite with Text & Start Call',
            'conferenceCommandsLink': 'Conference Commands',
            'numberIncorrect': 'Please specify a contact or a valid phone number to send the invite.',
            'outlookContactsNotAuthorizedInfo': 'App is not authorized in Outlook 365',
            'outlookContactsAuthorizeButton': 'Authorize',
            'outlookContactsAuthorizingButton': 'Authorizing...',
            'invitationSubject': 'New Conference',
            'invitationTitle': 'Please join the %s conference.',
            'invitationString1': 'The Conference will start immediately',
            'invitationString2': 'Dial-In Numbers:',
            'invitationDialIn1Telus': 'Toronto, ON (647) 499-6978',
            'invitationDialIn2Telus': 'Montreal, QC (438) 798-0521',
            'invitationDialIn3Telus': 'Saskatoon, SK (306) 500-5795',
            'invitationDialIn4Telus': 'Calgary, AB (587) 318-2458',
            'invitationDialIn5Telus': 'Winnipeg, MB (204) 813-6138',
            'invitationDialIn6Telus': 'Vancouver, BC (778) 658-6581',
            'invitationString3': 'International Dial-in Numbers:',
            'invitationString4': 'Participant Access: ',
            'invitationString5': 'Conferencing Tips: ',
            'invitationString6': 'Need an internatinal dial-in phone number? Please visit',
            'invitationString7': 'To mute your line, press *#6 on your keypad',
            'invitationString7ATT': 'For additional information including touch-tones to use for control during the conference and a list of international dial-in phone numbers, please visit',
            'invitationString8': 'This conference call is brought to you by %s Conferencing',
            'notEnable': 'Your account has not permissions to access this function. Please contact your account representative for an upgrade.'
        },
        "CONFERENCECOMMANDS": {
            'conferenceCommandsScreenHeader': 'Conference Commands',
            'callerCountInstruction': '<b>Caller Count:</b> Keep track of how many people are on the call',
            'leaveConferenceInstruction': '<b>Leave Conference:</b> Lets the host hang up and end the call',
            'menuInstruction': '<b>Menu:</b> Listen to the list of touchtone commands',
            'setListeningModeInstructions': '<b>Set Listening Modes</b><ul><li>Press 1x: <b>Mute callers</b> - Callers can unmute with<img src="%s" alt="star"><img src="%s" alt="pound"><img src="%s" alt="6"></li><li>Press 2x: <b>Mute callers</b> - Listen only. No unmuting option</li><li>Press 3x: <b>Unmute callers</b> - Opens the line again</li></ul>',
            'muteHostLineInstructions': '<b>Mute Host Line</b><ul><li>Press once to MUTE</li><li>Press again to UNMUTE</li></ul>',
            'secureCallInstructions': '<b>Secure the Call</b><ul><li>Press once to BLOCK all callers</li><li>Press again to OPEN the call</li></ul>',
            'hearEnterExitSoundsInstructions': '<b>Hear sound when people Enter or Exit call</b><ul><li>Press 1x: Turns OFF sound</li><li>Press 2x: <em>Enter</em> tone is ON <em>Exit</em> tone is OFF</li><li>Press 3x: <em>Enter</em> tone is OFF <em>Exit</em> tone is ON</li><li>Press 4x: Turns ON sound</li></ul>',
            'recordInstructions': '<b>Record your conference</b><ul><li>Press once to START recording</li><li>Press again to STOP recording</li></ul>'
        },
        "NEWMEETING": {
            'newMeetingScreenHeader': 'New Meeting',
            'defaultTopicLabel': 'RingCentral Meeting',
            'topicLabel': 'Topic:',
            'topicPlaceholder': 'Meeting topic',
            'whenLabel': 'When',
            'dateFormat': 'MM/dd/yy',
            'dateMask': '99/99/99',
            'timeFormat': 'hh:mma',
            'timeMask': '99:99AA',
            'durationLabel': 'Duration:',
            'recurringMeetingCheckbox': 'Recurring Meeting',
            'recurringMeetingHelpGoogle': 'Please do not forget to check "Repeat" in Google Calendar',
            'recurringMeetingHelpOutlook': 'Please do not forget to set "Repeat" option in event properties',
            'meetingTypeLabel': 'Meeting Type',
            'screenShareMeetingType': 'Screen Share Meeting',
            'videoMeetingType': 'Video Meeting',
            'meetingOptionsLabel': 'Meeting Options',
            'meetingPasswordCheckbox': 'Require meeting password',
            'meetingPasswordLabel': 'Password:',
            'joinBeforeHostCheckbox': 'Enable join before host',
            'inviteButtonTextGoogle': 'Invite with Google Calendar',
            'inviteButtonTextOutlook': 'Save in Calendar',
            'inviteButtonTextLyncTelus': 'Invite with Skype for Business & Start Meeting',
            'inviteButtonTextLync': 'Invite with Text & Start Meeting',
            'inviteButtonTextTelusError': 'Your Account does not support a phone number as the destination of an invite.',
            'hourOption': 'h.',
            'minuteOption': 'm.',
            'topicRequiredError': 'Topic is required',
            'invalidStartDateError': 'Please enter a valid start date',
            'invalidStartTimeError': 'Please enter a valid start time',
            'meetingInPastError': 'Creating meeting in the past is forbidden',
            'passwordNotProvidedError': 'Please provide meeting password',
            'apiErrorCaption': 'API Error:',
            'apiErrorExtension': 'An error appeared while loading extension data',
            'outlookContactsNotAuthorizedInfo': 'App is not authorized in Outlook 365',
            'outlookContactsAuthorizeButton': 'Authorize',
            'outlookContactsAuthorizingButton': 'Authorizing...',
            'googleNotAuthorizedInfo': 'App is not authorized in Google',
            'googleAuthorizeButton': 'Authorize',
            'invitationString1': 'Hi there',
            'invitationString2': 'You have been invited to a scheduled %s Meetings video conference.',
            'invitationString3': 'Join from a PC, Mac, iPad, iPhone or Android device.',
            'invitationString4': 'Please click this URL to start or join:',
            'invitationString5': 'Or enter meeting ID at',
            'invitationString6': 'Join from dial-in phone line:',
            'invitationString7': 'Dial:',
            'invitationString8': 'Meetings Dial-In numbers:',
            'invitationDialIn1Telus': '647-503-2058 Toronto, ON',
            'invitationDialIn2Telus': '438-794-3910 Montreal, QC',
            'invitationDialIn3Telus': '587-316-7760 Calgary, AB',
            'invitationDialIn4Telus': '431-800-1581 Winnipeg, MB',
            'invitationDialIn5Telus': '604-628-5209 Vancouver, BC',
            'invitationDialIn6Telus': '306-500-6403 Saskatoon, SK',
            'invitationString9': 'Meeting ID:',
            'invitationString10': 'Password:',
            'invitationString11': 'Participant ID: Shown after joining the meeting',
            'invitationString12': 'International numbers available:',
            'meetingNotInstalled': "RingCentral Meeting is not installed. Please click <a target='_blank'' href='https://service.ringcentral.com/tools/meetingsApp.html'>here</a> to install it.",
            'meetingNotInstalledATT': "Office@Hand Meeting is not installed. Please click <a target='_blank'' href='https://service-officeathand.att.com/tools/meetingsApp.html#/'>here</a> to install it.",
            'meetingNotInstalledBT': "BT Cloud Phone Meeting is not installed. Please click <a target='_blank'' href='https://portal.btcloudphone.bt.com/tools/meetingsApp.html#/'>here</a> to install it.",
            'meetingNotInstalledTELUS': "TELUS Business Connect Meeting is not installed. Please click <a target='_blank'' href='https://voicemanager.businessconnect.telus.com//tools/meetingsApp.html#/'>here</a> to install it."

        },
        "ACTIVITYCARD": {
            "CALLS": {
                "titleEmpty": 'No Recent Calls',
                "titleOne": 'Recent Call',
                "titleMany": 'Recent Calls',
                "missedCall": 'Missed call',
                "inboundCall": 'Inbound call',
                "outboundCall": 'Outbound call'
            },
            "MESSAGES": {
                "Conversation": {
                    "titleEmpty": 'No Recent Conversations',
                    "titleOne": 'Recent Conversation',
                    "titleMany": 'Recent Conversations'
                },
                "Fax": {
                    "titleEmpty": 'No Fax Messages',
                    "titleOne": 'Fax Message',
                    "titleMany": 'Fax Messages'
                },
                "VoiceMail": {
                    "titleEmpty": 'No Voice Messages',
                    "titleOne": 'Voice Message',
                    "titleMany": 'Voice Messages'
                },
                "GoogleEmail": {
                    "titleEmpty": 'No Recent E-Mails',
                    "titleOne": 'Recent E-Mail',
                    "titleMany": 'Recent E-Mails'
                }
            }
        },
        "PHONETYPE": {
            "AdditionalCompanyNumber": 'Company',
            "DirectNumber": 'Direct',
            "MainCompanyNumber": 'Main',
            "CompanyFaxNumber": 'Fax',
            "CompanyNumber": 'Company',
            "UnknownType": 'Other'
        },
        "COUNTRY": {
            "AR": "Argentina",
            "AT": "Austria",
            "BH": "Bahrain",
            "BR": "Brazil",
            "BG": "Bulgaria",
            "CA": "Canada",
            "CL": "Chile",
            "CN": "China",
            "HR": "Croatia",
            "CY": "Cyprus",
            "CZ": "Czech Republic",
            "DK": "Denmark",
            "DO": "Dominican Republic",
            "EE": "Estonia",
            "FI": "Finland",
            "FR": "France",
            "DE": "Germany",
            "HU": "Hungary",
            "IE": "Ireland",
            "IL": "Israel",
            "IT": "Italy",
            "JP": "Japan",
            "LV": "Latvia",
            "LT": "Lithuania",
            "LU": "Luxembourg",
            "MY": "Malaysia",
            "MX": "Mexico",
            "NL": "Netherlands",
            "NO": "Norway",
            "PA": "Panama",
            "PL": "Poland",
            "PT": "Portugal",
            "RO": "Romania",
            "SK": "Slovakia",
            "SI": "Slovenia",
            "ES": "Spain",
            "SE": "Sweden",
            "CH": "Switzerland",
            "TR": "Turkey",
            "GB": "United Kingdom",
            "AU": "Australia",
            "GE": "Georgia",
            "ID": "Indonesia",
            "KE": "Kenya",
            "NG": "Nigeria",
            "PK": "Pakistan",
            "ZA": "South Africa",
            "KR": "South Korea",
            "TW": "Taiwan",
            "UA": "Ukraine",
            "US": "United States",
            "VN": "Vietnam"
        }
    }
};