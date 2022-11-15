'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">safe-move documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' : 'data-target="#xs-components-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' :
                                            'id="xs-components-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' : 'data-target="#xs-injectables-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' :
                                        'id="xs-injectables-links-module-AppModule-13a6d629c6dfba88d318dc3a4700e724cd89740ec1cd90988059a1cd0462f8e0de5625481c44f273ce1a1ab806be9c1005390c81f72ac8aa5b20557fd646bdfa"' }>
                                        <li class="link">
                                            <a href="injectables/ClockService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClockService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ClonerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClonerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EventBusService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventBusService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' : 'data-target="#xs-components-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' :
                                            'id="xs-components-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' : 'data-target="#xs-injectables-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' :
                                        'id="xs-injectables-links-module-CoreModule-61a0aa153217264450a8b383a645b19608fc1367e83c0fcc21bc6325c9614674e8757d36d42b29e616653a6d6482384f1ccf9d613d07836e20bb803f2925e6be"' }>
                                        <li class="link">
                                            <a href="injectables/ClonerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClonerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EventBusService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventBusService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoadingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormStatusModule.html" data-type="entity-link" >FormStatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormStatusModule-134d6fd68c49f622cad2f3b35b1ce60937565f9f446e6200a925dffa91aa3b19a7c5ef591be1c9ed5310254c0acd0b2cdf5881542aad646f92d7c0949ff587e5"' : 'data-target="#xs-components-links-module-FormStatusModule-134d6fd68c49f622cad2f3b35b1ce60937565f9f446e6200a925dffa91aa3b19a7c5ef591be1c9ed5310254c0acd0b2cdf5881542aad646f92d7c0949ff587e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormStatusModule-134d6fd68c49f622cad2f3b35b1ce60937565f9f446e6200a925dffa91aa3b19a7c5ef591be1c9ed5310254c0acd0b2cdf5881542aad646f92d7c0949ff587e5"' :
                                            'id="xs-components-links-module-FormStatusModule-134d6fd68c49f622cad2f3b35b1ce60937565f9f446e6200a925dffa91aa3b19a7c5ef591be1c9ed5310254c0acd0b2cdf5881542aad646f92d7c0949ff587e5"' }>
                                            <li class="link">
                                                <a href="components/FormStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsProviderModule.html" data-type="entity-link" >IconsProviderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesModule.html" data-type="entity-link" >MessagesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesRoutingModule.html" data-type="entity-link" >MessagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QrCodeModule.html" data-type="entity-link" >QrCodeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QrCodeModule-aa30dca4fe0f6505dc673e5ccf09797e0febbade82d2dfa2f9eecb3c055e43b03c024d2a4098136f833afd2a7f639d3983cc4f1977128d26c302b4e369e8d58e"' : 'data-target="#xs-components-links-module-QrCodeModule-aa30dca4fe0f6505dc673e5ccf09797e0febbade82d2dfa2f9eecb3c055e43b03c024d2a4098136f833afd2a7f639d3983cc4f1977128d26c302b4e369e8d58e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QrCodeModule-aa30dca4fe0f6505dc673e5ccf09797e0febbade82d2dfa2f9eecb3c055e43b03c024d2a4098136f833afd2a7f639d3983cc4f1977128d26c302b4e369e8d58e"' :
                                            'id="xs-components-links-module-QrCodeModule-aa30dca4fe0f6505dc673e5ccf09797e0febbade82d2dfa2f9eecb3c055e43b03c024d2a4098136f833afd2a7f639d3983cc4f1977128d26c302b4e369e8d58e"' }>
                                            <li class="link">
                                                <a href="components/QrCodeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-3a86c5bc3d9cc54193618888dbc4142bab8085ce2957a68796eb87c7cec4a17ce73fdfa673e5855dc190d9b7847255282872c4a44b00d2ec09ffeca829a10615"' : 'data-target="#xs-components-links-module-SharedModule-3a86c5bc3d9cc54193618888dbc4142bab8085ce2957a68796eb87c7cec4a17ce73fdfa673e5855dc190d9b7847255282872c4a44b00d2ec09ffeca829a10615"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3a86c5bc3d9cc54193618888dbc4142bab8085ce2957a68796eb87c7cec4a17ce73fdfa673e5855dc190d9b7847255282872c4a44b00d2ec09ffeca829a10615"' :
                                            'id="xs-components-links-module-SharedModule-3a86c5bc3d9cc54193618888dbc4142bab8085ce2957a68796eb87c7cec4a17ce73fdfa673e5855dc190d9b7847255282872c4a44b00d2ec09ffeca829a10615"' }>
                                            <li class="link">
                                                <a href="components/PureLoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PureLoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsModule.html" data-type="entity-link" >StudentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentsModule-5d7bca26000293804ab22f4531e9fdbe6c4db0ef8240f4111792cae9046875d84457ecef0cccc99e0e946d1a382ca186ccda2667a2eee8f128ffc55c3a00ee60"' : 'data-target="#xs-components-links-module-StudentsModule-5d7bca26000293804ab22f4531e9fdbe6c4db0ef8240f4111792cae9046875d84457ecef0cccc99e0e946d1a382ca186ccda2667a2eee8f128ffc55c3a00ee60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentsModule-5d7bca26000293804ab22f4531e9fdbe6c4db0ef8240f4111792cae9046875d84457ecef0cccc99e0e946d1a382ca186ccda2667a2eee8f128ffc55c3a00ee60"' :
                                            'id="xs-components-links-module-StudentsModule-5d7bca26000293804ab22f4531e9fdbe6c4db0ef8240f4111792cae9046875d84457ecef0cccc99e0e946d1a382ca186ccda2667a2eee8f128ffc55c3a00ee60"' }>
                                            <li class="link">
                                                <a href="components/ListStudentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListStudentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsRoutingModule.html" data-type="entity-link" >StudentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeModule.html" data-type="entity-link" >WelcomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomeModule-95c504a6ee9c828003b61289a7e1da1b913b0d2f040dfec61db04aa9ff2402dc2ae47a5ebec9002e6fbe6223b396196f05e27101103a43a90bb5cf57d484505f"' : 'data-target="#xs-components-links-module-WelcomeModule-95c504a6ee9c828003b61289a7e1da1b913b0d2f040dfec61db04aa9ff2402dc2ae47a5ebec9002e6fbe6223b396196f05e27101103a43a90bb5cf57d484505f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomeModule-95c504a6ee9c828003b61289a7e1da1b913b0d2f040dfec61db04aa9ff2402dc2ae47a5ebec9002e6fbe6223b396196f05e27101103a43a90bb5cf57d484505f"' :
                                            'id="xs-components-links-module-WelcomeModule-95c504a6ee9c828003b61289a7e1da1b913b0d2f040dfec61db04aa9ff2402dc2ae47a5ebec9002e6fbe6223b396196f05e27101103a43a90bb5cf57d484505f"' }>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeRoutingModule.html" data-type="entity-link" >WelcomeRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/MessagesComponent.html" data-type="entity-link" >MessagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MessagesComponent-1.html" data-type="entity-link" >MessagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MetricsStudentsComponent.html" data-type="entity-link" >MetricsStudentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentComponent.html" data-type="entity-link" >StudentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentComponent-1.html" data-type="entity-link" >StudentComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Constants.html" data-type="entity-link" >Constants</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnsureModuleLoadedOnceGuard.html" data-type="entity-link" >EnsureModuleLoadedOnceGuard</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClockService.html" data-type="entity-link" >ClockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClonerService.html" data-type="entity-link" >ClonerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventBusService.html" data-type="entity-link" >EventBusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesService.html" data-type="entity-link" >MessagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentsService.html" data-type="entity-link" >StudentsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudent.html" data-type="entity-link" >IStudent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});