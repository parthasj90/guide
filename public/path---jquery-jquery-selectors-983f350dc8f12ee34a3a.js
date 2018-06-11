webpackJsonp([0x9bbd277b511d],{4945:function(s,n){s.exports={data:{markdownRemark:{html:'<h2>jQuery Selectors</h2>\n<p>jQuery uses CSS-style selectors to select parts, or elements, of an HTML page. It then lets you do something with the elements using jQuery methods, or functions.</p>\n<p>To use one of these selectors, type a dollar sign and parentheses after it: <code>$()</code>. This is shorthand for the <code>jQuery()</code> function. Inside the parentheses, add the element you want to select. You can use either single- or double-quotes. After this, add a dot after the parentheses and the method you want to use.</p>\n<p>Here’s an example of a jQuery method that selects all paragraph elements, and adds a class of “selected” to them:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>This is a paragraph selected by a jQuery method<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n<span class="token operator">&lt;</span>p<span class="token operator">></span>This is also a paragraph selected by a jQuery method<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"selected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In jQuery, the class and ID selectors are the same as in CSS. If you want to select elements with a certain class, use a dot (<code>.</code>) and the class name. If you want to select elements with a certain ID, use the hash symbol (<code>#</code>) and the ID name. Note that HTML is not case-sensitive, therefore it is best practice to keep HTML markup and CSS selectors lowercase.</p>\n<p>Selecting by class:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"p-with-class"</span><span class="token operator">></span>Paragraph <span class="token keyword">with</span> a <span class="token keyword">class</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".p-with-class"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// colors the text blue</span>\n</code></pre>\n      </div>\n<p>Selecting by ID:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>li id<span class="token operator">=</span><span class="token string">"li-with-id"</span><span class="token operator">></span>List item <span class="token keyword">with</span> an ID<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#li-with-id"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span><span class="token string">"&lt;p>Socks&lt;/p>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can also select certain elements along with their classes and IDs:</p>\n<p>Selecting with classes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"wish-list"</span><span class="token operator">></span>My Wish List<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>\n\n<span class="token comment" spellcheck="true">// This adds a new li element to the end of the list</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul.wish-list"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;li>New blender&lt;/li>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Selecting with IDs:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>h1 id<span class="token operator">=</span><span class="token string">"headline"</span><span class="token operator">></span>News Headline<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"h1#headline"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"font-size"</span><span class="token punctuation">,</span> <span class="token string">"2em"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There are also selectors that act as filters - they will usually start with colons. For example, the <code>:first</code> selector selects the element that is the first child of its parent. Here’s an example of an unordered list with some list items. The jQuery selector below the list selects the first <code>&#x3C;li></code> element in the list - the list item containing “One” - and then uses the <code>.css</code> method to turn the text green.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:first"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Note:</strong> Don’t forget that applying css in JavaScript is not a good practice. You should always give your styles in css files.</p>\n<p>Another filtering selector, <code>:contains(text)</code>, selects elements that have a certain text. Place the text you want to match in the parentheses. Here’s an example with two paragraphs. The jQuery selector takes the word “Moto” and changes its color to yellow.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p:contains(\'World\')"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"yellow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Note:</strong> In the jQuery selector, <code>World</code> is in single-quotes because it is already inside a pair of double-quotes. Always use single-quotes inside double-quotes to avoid unintentionally ending a string.</p>\n<p><strong>Multiple Selectors</strong>\nIn jQuery, you can use multiple selectors to apply the same changes to more than one element, using a single line of code. You do this by separating the different ids with a comma. For example, if you want to set the background color of three elements with ids cat,dog,and rat respectively to red, simply do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$("#cat,#dog,#rat").css("background-color","red");</code></pre>\n      </div>\n<p>These are just a few of the selectors available for use in jQuery. See the More Information section for a link to the complete list on the jQuery website.</p>\n<h4>More Information:</h4>\n<ul>\n<li><a href="http://api.jquery.com/category/selectors/">Full list of jQuery selectors</a></li>\n</ul>',fields:{slug:"/jquery/jquery-selectors/"},frontmatter:{title:"jQuery Selectors"}}},pathContext:{slug:"/jquery/jquery-selectors/"}}}});
//# sourceMappingURL=path---jquery-jquery-selectors-983f350dc8f12ee34a3a.js.map