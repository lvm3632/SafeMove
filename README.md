
<p align="center">
  <a href="" rel="noopener">
 <img src="./safe-move.JPG" alt="Safe move"></a>
</p>

<h3 align="center">Proyecto: Safe Move</h3>

<hr>
<p align="center"> Guarda y registra alumnos en caso de una emergencia
    <br> 
</p>

<h2 id="📝-table-of-contents">📝 Table of Contents</h2>
<ul>
<li><a href="#about">About</a></li>
<li><a href="#getting_started">Getting Started</a></li>
<li><a href="#deployment">Deployment</a></li>
<li><a href="#documentation">Documentation</a></li>
<li><a href="#standars">Accessibility standards</a></li>
</ul>
<h2 id="🧐-about-">🧐 About <a name = "about"></a></h2>
<p>Es una aplicación web hecha en Angular 14, que ayuda a los alumnos y profesores, que estén registrados y se pueda saber quién está a salvo, a partir del uso del LocalStorage.</p>
<h3 id="initial-view">Initial View</h3>
<p><img src="./welcome.JPG" alt="Safe move"></a>
/welcome</p>
<h3 id="list-of-students">List of students</h3>
<p><img src="./students.JPG" alt="Safe move"></a>
/students</p>
<h3 id="metrics">Metrics</h3>
<p><img src="./metrics.JPG" alt="Safe move"></a>
/dashboard</p>
<h2 id="🏁-getting-started-">🏁 Getting Started <a name = "getting_started"></a></h2>
<p>Clonar el repositorio, tener instalada la última versión de Angular CLI, y un navegador como Chrome.</p>
<h3 id="prerequisites">Prerequisites</h3>
<p>Angular CLI: 13.3.9</p>
<p>Node: 16.14.2</p>
<p>Package Manager: npm 8.5.0</p>
<p>OS: win32 x64</p>
<div><pre class="line-numbers"><code class="language-none">npm i &#64;angular/cli</code></pre></div><h3 id="installing-local">Installing (Local)</h3>
<p>Clonar el repositorio</p>
<p>Descargar las librerias del proyecto</p>
<div><pre class="line-numbers"><code class="language-none">npm i --force</code></pre></div><p>Correr el proyecto en local</p>
<div><pre class="line-numbers"><code class="language-none">ng serve -o</code></pre></div><h2 id="🚀-deployment-">🚀 Deployment <a name = "deployment"></a></h2>
<p>Clonar el repositorio</p>
<p>Descargar las librerias del proyecto</p>
<div><pre class="line-numbers"><code class="language-none">npm i --force</code></pre></div><p>Crear la carpeta ./dist del proyecto</p>
<div><pre class="line-numbers"><code class="language-none">ng build --configuration production</code></pre></div><p>Correr y tener configurado el archivo server.js</p>
<div><pre class="line-numbers"><code class="language-none">node server.js</code></pre></div><h2 id="🗎-documentation-">🗎 Documentation <a name = "documentation"></a></h2>
<p>La aplicación usa ant-design como principal framework de customización y diseño de componentes (<a href="https://ng.ant.design/docs/introduce/en">https://ng.ant.design/docs/introduce/en</a>), y es código abierto. También usado por Alibaba e instancias de Apache.</p>
<h3 id="dependencies">Dependencies</h3>
<p>Librerías necesarias al momento del lanzamiento de la última <strong>versión 1.0.0</strong></p>
<div><pre class="line-numbers"><code class="language-none">    &quot;&#64;angular/animations&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/common&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/compiler&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/core&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/forms&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/localize&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/platform-browser&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/platform-browser-dynamic&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/router&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;angular/service-worker&quot;: &quot;^14.2.10&quot;,
    &quot;&#64;ng-bootstrap/ng-bootstrap&quot;: &quot;^12.1.2&quot;,
    &quot;&#64;popperjs/core&quot;: &quot;^2.10.2&quot;,
    &quot;angularx-qrcode&quot;: &quot;^13.0.15&quot;,
    &quot;apexcharts&quot;: &quot;^3.35.5&quot;,
    &quot;body-parser&quot;: &quot;^1.20.1&quot;,
    &quot;bootstrap&quot;: &quot;^5.2.0&quot;,
    &quot;clone&quot;: &quot;^2.1.2&quot;,
    &quot;compression&quot;: &quot;^1.7.4&quot;,
    &quot;cors&quot;: &quot;^2.8.5&quot;,
    &quot;dotenv&quot;: &quot;^16.0.3&quot;,
    &quot;express&quot;: &quot;^4.18.2&quot;,
    &quot;express-session&quot;: &quot;^1.17.3&quot;,
    &quot;fs&quot;: &quot;^0.0.1-security&quot;,
    &quot;https&quot;: &quot;^1.0.0&quot;,
    &quot;ng-apexcharts&quot;: &quot;^1.7.1&quot;,
    &quot;ng-zorro-antd&quot;: &quot;^13.4.0&quot;,
    &quot;ngx-mask&quot;: &quot;13.1.15&quot;,
    &quot;path&quot;: &quot;^0.12.7&quot;,
    &quot;rxjs&quot;: &quot;~7.5.0&quot;,
    &quot;tslib&quot;: &quot;^2.3.0&quot;,
    &quot;zone.js&quot;: &quot;~0.11.4&quot;</code></pre></div><h3 id="modules-and-more">Modules and more</h3>
<h4 id="appmodule">AppModule</h4>
<p> <img src="./appmodule.JPG" alt="Safe move"></a></p>
<h4 id="core-module">Core module</h4>
<p> <img src="./coremodule.JPG" alt="Safe move"></a></p>
<h4 id="dashboard-module">Dashboard module</h4>
<p> <img src="./dashboardmodule.JPG" alt="Safe move"></a></p>
<h4 id="form-status-module">Form status module</h4>
<p> <img src="./formstatusmodule.JPG" alt="Safe move"></a></p>
<h4 id="messages-module">Messages module</h4>
<p> <img src="./messagesmodule.JPG" alt="Safe move"></a></p>
<h4 id="qr-module">QR Module</h4>
<p> <img src="./qrmodule.JPG" alt="Safe move"></a></p>
<h4 id="shared-module">Shared Module</h4>
<p> <img src="./sharedmodule.JPG" alt="Safe move"></a></p>
<h4 id="students-module">Students module</h4>
<p> <img src="./studentsmodule.JPG" alt="Safe move"></a></p>
<h4 id="welcome-module">Welcome module</h4>
<p> <img src="./welcomemodule.JPG" alt="Safe move"></a></p>
<h2 id="routing">Routing</h2>
<h4 id="links-and-structure">Links and structure</h4>
<p> <img src="./linksmodule.JPG" alt="Safe move"></a></p>
<h2 id="🎈-usage-">🎈 Usage <a name="usage"></a></h2>
<p>Si se quiere desplegar en un servidor como linux, es necesario desplegarlo en un motor de plantillas como la función ofrecida por express &quot;express.static&quot;, a partir de correr una instancia de node.</p>
<h2 id="🌐-accesibility-standards-web3-">🌐 Accesibility Standards: Web3 <a name = "standards"></a></h2>
<ul>
<li>PWA Aplication</li>
<li>Offline mode (cache)</li>
<li>Service worker</li>
<li>Local Storage</li>
<li>Reactive style paradigm (using RxJS, stateful in overall)</li>
</ul>
<h2 id="⛏️-built-using-">⛏️ Built Using <a name = "built_using"></a></h2>
<ul>
<li><a href="https://angular.io/">Angular</a> - Database</li>
<li><a href="https://expressjs.com/">Express</a> - Server Framework</li>
<li><a href="https://nodejs.org/en/">NodeJs</a> - Server Environment</li>
<li><a href="https://ng.ant.design/docs/introduce/en">NgZorro</a> - Ant design framework frontend</li>
</ul>
<h2 id="✍️-authors-">✍️ Authors <a name = "authors"></a></h2>
<ul>
<li><p><a href="https://github.com/lvm3632">@lvm3632</a> - Miche Lujano </p>
</li>
<li><p><a href="https://github.com/Luis99B">@Luis99B</a> - Luis Bodart </p>
</li>
<li><p><a href="https://github.com/Luis99B">@CristopherIC</a> - Cristopher Ibarra</p>
</li>
</ul>

