### ComponentFactory
- 创建ComponentRef

### ComponentFactoryResolver
- 保存ComponentFactory

### ModuleWithComponentFactories
- Combination of NgModuleFactory and ComponentFactorys.

### ModuleWithProviders
- A wrapper around a module that also includes the providers.

### NgModuleFactoryLoader
- 加载NgModuleFactory
### NgModuleFactory
- 创建NgModuleRef
### NgModuleRef
- 由 NgModuleFactory创建,
- NgModuleRef provides access to the NgModule Instance as well other objects related to this NgModule Instance.

### NgModule
- NgModule decorator and metadata.

### getModuleFactory
- Returns the NgModuleFactory with the given id, if it exists and has been loaded. Factories for modules that do not specify an id cannot be retrieved. Throws if the module cannot be found.

### SystemJsNgModuleLoader
- load 

### SystemJsNgModuleLoaderConfig
- factoryPathPrefix 添加前缀
- factoryPathSuffix 添加后缀


RendererFactory2
createPlatformFactory
CompilerFactory


### ApplicationModule
- This module includes the providers of @angular/core that are needed to bootstrap components via ApplicationRef.


### ApplicationRef
- A reference to an Angular application running on a page.


### ModuleWithProviders
- A wrapper around a module that also includes the providers.



### createPlatform
- 创建Platform,Platform必须通过这个函数创建




AnimationFactory
XhrFactory



#### core
##### ANALYZE_FOR_ENTRY_COMPONENTS
- 这个Token可以用来创建一个虚拟的provider,自动加载到entryComponents
```ts
// helper function inside the router
function provideRoutes(routes) {
  return [
    {provide: ROUTES, useValue: routes},
    {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
  ];
}
// user code
let routes = [
  {path: '/root', component: RootComp},
  {path: '/teams', component: TeamsComp}
];
@NgModule({
  providers: [provideRoutes(routes)]
})
class ModuleWithRoutes {}
```

##### APP_BOOTSTRAP_LISTENER
- All callbacks provided via this token will be called for every component that is bootstrapped. Signature of the callback:

##### APP_ID
- 

#### APP_INITIALIZER
- 一个当application初始化的时候运行的 Function

#### AfterContentChecked
- Lifecycle hook that is called after every check of a directive's content.

#### AfterViewInit
- Lifecycle hook that is called after a component's view has been fully initialized.

#### ApplicationInitStatus
- A class that 反映了 the state of running APP_INITIALIZERs.

#### Attribute
- Attribute decorator and metadata.

#### COMPILER_OPTIONS
- Token to provide CompilerOptions in the platform injector.

#### ClassProvider
- const provider: ClassProvider = {provide: 'someToken', useClass: MyService};

#### Compiler
- Low-level service for running the angular compiler 在 runtime 的时候, 创建 ComponentFactorys, 可以被用来动态创建和渲染一个 Component 实例.

- 每个 @NgModule provides 有自己的 Compiler to its injector, that will use the directives/pipes of the ng module 用来编译 components.

> compileModuleSync(moduleType: Type<T>) : NgModuleFactory<T>

- 编译 the given NgModule and all of its components. All templates of the components listed in entryComponents have to be inlined.

#### CompilerFactory
- A factory for creating a Compiler

#### CompilerOptions
- Options for creating a compiler



#### ForwardRefFn
- An interface that a function passed into forwardRef has to implement.



```ts

ComponentFactory = resolveComponentFactory.resolveComponentFactory(component)

ChildrenOutletContexts = ChildrenOutletContexts.getOrCreateContext(name).children;

OutletInjector = new OutletInjector(ActivatedRoute,ChildrenOutletContexts,ViewContainerRef.injector)



ViewContainerRef.createComponent<C>(componentFactory: ComponentFactory<C>, index?: number, injector?: Injector, projectableNodes?: any[][], ngModule?: NgModuleRef<any>): ComponentRef<C>;

ViewContainerRef.insert(ComponentRef.hostView

```