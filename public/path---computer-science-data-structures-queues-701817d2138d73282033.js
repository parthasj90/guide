webpackJsonp([0x608084292c72],{3863:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Queues</h2>\n<p>Queue is a First In First Out (FIFO) Data Structure. Many algorithms use Queues at their core for improving performance.</p>\n<p>Queue is one of the fundamental Abstract Data Types (ADT). It is similar to queues we have in movies or supermarkets. The first person to arrive will be served first right? Similarly, the first element to be inserted will be removed first. There are several types of queues such as,</p>\n<ol>\n<li>Simple Queue (or Queue)  </li>\n<li>Circular Queue  </li>\n<li>Priority Queue  </li>\n<li>Dequeue (Double Ended Queue)  </li>\n</ol>\n<p>If you can understand the simple queue (which from here on will be referred as ‘Queue’) then all the others are just as easy, with little modifications.  </p>\n<p>Most common operations available on queue are,  </p>\n<ol>\n<li>Add / Offer - Inserts an element into the end of the queue.  </li>\n<li>Remove / Poll - Remove an element from the beginning of the queue.  </li>\n<li>Peek - Returns element at the beginning of the queue but will not remove it.  </li>\n<li>Size / Count - Returns the number of elements currently present in the queue.  </li>\n<li>IsEmpty - Check whether the queue is empty or not.  </li>\n</ol>\n<p>Implementation of a queue is possible using either arrays or linked lists. The following is a simple array implementation of the queue data structure with its most common operations.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> Queue <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> back <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        isEmpty<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> front <span class="token operator">>=</span> back <span class="token operator">||</span> queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        add<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment" spellcheck="true">/* You can also do queue.push(elem) in JavaScript. \n            This is how they do it in other languages */</span>\n            queue<span class="token punctuation">[</span>back<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> elem<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        remove<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> queue<span class="token punctuation">[</span>front<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// or queue.shift()</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Queue is Empty."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        peek<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> queue<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// true</span>\nqueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nqueue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 1</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// exception</span>\n</code></pre>\n      </div>\n<h4>Applications</h4>\n<ul>\n<li>Simulation  </li>\n<li>Scheduling (Job Scheduling, Disk Scheduling)  </li>\n<li>Shared Resource Management  </li>\n<li>Keyboard Buffer  </li>\n<li>Breadth First Search  </li>\n<li>To handle congestion in network  </li>\n</ul>\n<h4>More Information:</h4>\n<ul>\n<li><a href=\'http://www.geeksforgeeks.org/queue-data-structure/\' target=\'_blank\' rel=\'nofollow\'>More Info on Queues - GeeksForGeeks</a>  </li>\n<li><a href=\'https://www.hackerrank.com/domains/data-structures/queues\' target=\'_blank\' rel=\'nofollow\'>Solve Challenges using Queues - Hackerrank</a></li>\n<li><a href="https://www.youtube.com/watch?v=wjI1WNcIntg" target ="_blank" rel="nofollow">HackerRank Stacks and Queues Video</a></li>\n</ul>',fields:{slug:"/computer-science/data-structures/queues/"},frontmatter:{title:"Queues"}}},pathContext:{slug:"/computer-science/data-structures/queues/"}}}});
//# sourceMappingURL=path---computer-science-data-structures-queues-701817d2138d73282033.js.map