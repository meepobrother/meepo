
### pay
- ali.pay.class

> __construct

> array2url

> bulidSign

> handleReufndResult

> requestApi

> refund

- mpay.class

> create
> buildPayLog

- weixin.nativepay
- weixin.pay.class

> __construct
> array2url
> bulidSign
> parseResult
> requestApi
> shortUrl
> bulidNativePayurl
> paylog2NativeUrl
> buildUnifiedOrder
> buildMicroOrder
> NoticeMicroSuccessOrder
> buildJsApiPrepayid

### account.class

- WeAccount

> create
> token
> includes
> __construct
> checkSign
> fetchAccountInfo
> queryAvailableMessages
> queryAvailablePackets
> parse
> response
> isPushSupported
> push
> isBroadcastSupported
> broadcast
> isMenuSupported
> menuCreate
> menuDelete
> menuModify
> menuQuery
> queryFansActions
> fansGroupAll
> fansGroupCreate
> fansGroupModify
> fansMoveGroup
> fansQueryGroup
> fansQueryInfo
> fansAll
> queryTraceActions
> traceCurrent
> traceHistory
> queryBarCodeActions
> barCodeCreateDisposable
> barCodeCreateFixed
> downloadMedia

- WeUtility

> defineConst
> createModule
> createModuleProcessor
> createModuleReceiver
> createModuleSite
> createModuleHook
> createModuleCron
> createModuleWxapp
> logging

- WeBase

- WeModule

> fieldsFormDisplay
> fieldsFormValidate
> fieldsFormSubmit
> ruleDeleted 
> settingsDisplay

- WeModuleProcessor

> __construct

- WeModuleReceiver

> receive

- WeModuleSite
> __call
> __get
> pay
> refund
> payResult
> payResultQuery
> share

- WeModuleCron

> __call
> addCronLog

- WeModuleWxapp

> result
> __call
> checkSign
> pay

- WeModuleHook

### agent.class


### ali.pay.class


### captcha.class