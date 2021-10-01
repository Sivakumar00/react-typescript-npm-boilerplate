<html>
<head>
 <!-- Place this tag in your head or just before your close body tag. -->
 </head>
 <body>
<h1 id="react-typescript-npm-boilerplate">react-typescript-npm-boilerplate</h1>
<p><img src="https://user-images.githubusercontent.com/32809581/135594096-a2378f7e-1a16-45a2-845c-824510554845.png" alt="react-typescript-npm-boilerplate"></p>
<h3 id="start-your-next-react-typescript-npm-package-project-in-seconds">Start your next react typescript npm package project in seconds</h3>
<p>A highly scalable, focus on performance and best practices</p>
<p><a href="https://open.vscode.dev/Sivakumar00/react-typescript-npm-boilerplate"><img src="https://open.vscode.dev/badges/open-in-vscode.svg" alt="Open in Visual Studio Code"></a></p>
<h5 id="browse-in-github1s-https-github1s-com-sivakumar00-react-typescript-npm-boilerplate-">Browse in <a href="https://github1s.com/Sivakumar00/react-typescript-npm-boilerplate">Github1s</a></h5>
<hr>
<h3 id="built-with">Built with</h3>
<ul>
<li><a href="https://reactjs.org/">ReactJS v17.0.2</a></li>
<li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
<li><a href="https://eslint.org/">Eslint</a></li>
<li><a href="https://prettier.io/">Prettier</a></li>
<li><a href="https://storybook.js.org/">Story Book</a></li>
<li><a href="https://github.com/typicode/husky">Husky-Git hooks</a></li>
<li><a href="https://jestjs.io/">Jest</a></li>
<li><a href="https://rollupjs.org/">Rollup.js</a></li>
<li><a href="https://github.com/marak/Faker.js/">Faker.js</a></li>
<li>and some ✨Magic ✨</li>
</ul>
<h2 id="usage">Usage</h2>
<p>This boilerplate requires <a href="https://nodejs.org/">Node.js</a> v10+ to run.</p>
<p>Install the dependencies and devDependencies and start the storybook.</p>
<pre><code class="lang-sh">git <span class="hljs-built_in">clone</span> &lt;<span class="hljs-built_in">clone</span> url&gt;
<span class="hljs-built_in">cd</span> react-typescript-npm-boilerplate
npm i
npm run storybook
</code></pre>
<p>For production build</p>
<pre><code class="lang-sh">npm <span class="hljs-keyword">run</span><span class="bash"> build</span>
</code></pre>
<p>For unit testing</p>
<pre><code class="lang-sh">npm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span></span>
</code></pre>
<p>For unit test &amp; generate JUnit report</p>
<pre><code class="lang-sh">npm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span>:junit</span>
</code></pre>
<p>For lint check and fix</p>
<pre><code class="lang-sh">npm <span class="hljs-keyword">run</span><span class="bash"> lint
</span>npm <span class="hljs-keyword">run</span><span class="bash"> lint:fix</span>
</code></pre>
<p>For build storybook</p>
<pre><code class="lang-sh">npm <span class="hljs-keyword">run</span><span class="bash"> build-storybook</span>
</code></pre>
<h4 id="how-git-commit-works-">How git commit works?</h4>
<p>Since we are using <a href="https://github.com/conventional-changelog/commitlint">Conventional-commits</a>. There should be subject mentioned in the below list.</p>
<pre><code class="lang-sh">git commit -m "<span class="hljs-tag">&lt;<span class="hljs-name">subject</span>&gt;</span>: <span class="hljs-tag">&lt;<span class="hljs-name">message</span>&gt;</span>"
</code></pre>
<p>For example:</p>
<pre><code class="lang-sh"><span class="hljs-attribute">git</span> commit -m <span class="hljs-string">"chore: commit message here"</span>
</code></pre>
<h5 id="list-of-commit-subjects-">List of commit subjects:</h5>
<ul>
<li>build</li>
<li>ci</li>
<li>chore</li>
<li>docs</li>
<li>feat</li>
<li>fix</li>
<li>perf</li>
<li>refactor</li>
<li>revert</li>
<li>style</li>
<li>test</li>
</ul>
<h5 id="pre-commit-checks">Pre-commit checks</h5>
<p>Everytime you commit the code, there will be following checks:</p>
<ul>
<li>Eslint check</li>
<li>Prettier format check</li>
<li>Unit test check</li>
<li>Build success check</li>
</ul>
<blockquote>
<p>You can add/remove the checks in .husky/pre-commit file</p>
</blockquote>
<hr>
<p>Want to contribute? Great! </p>
<h2 id="license">License</h2>
<p>MIT (Free software)</p>

 </body>
 </html>
