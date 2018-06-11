webpackJsonp([0x6cccdd18adfd],{3886:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>Big O Notation</h2>\n<p><em>As a computer scientist, if you are working on an important piece of software, you will likely need to be able to estimate how fast some algorithm or other going to run.</em></p>\n<p>Big O notation is used in computer science to describe the performance or complexity of an algorithm. Actually Big O notation is special symbol that tells you how fast an algorithm is. Of course you’ll use predefined algorithms often — and when you do, it’s vital to understand how fast or slow they are.</p>\n<h4>What Big O notation looks like?</h4>\n<img align="left" src="https://user-images.githubusercontent.com/5860906/31781171-74c6b48a-b500-11e7-9626-f715b37b10f0.png">\nThis tells you the number of operations an algorithm will make. It’s called Big O notation because you put a “Big O” in front of the number of operations.\n<br clear="left"/> \n<h4>Big O establishes a worst-case run time</h4>\n<p>If you are a doctor who is treating Harry Abbit, you might look into the electronic records that are related to Harry Abbit medical history (he is the first person in a list). Lets consider the situation when his  life depends on all available medical data.\nSuppose you’re using simple search to look for a person in the electronic records. You know that simple search takes O(n) time to run, so you’ll have to look through every single entry for Abbit. Of course, you’ve noticed that guy is the first entry. So you didn’t have to look at every entry — you found it on the first try.</p>\n<p><em>Did this algorithm take O(n) time? Or did it take O(1) time because you found the person on the first try?</em></p>\n<p>In this case, that’s the best-case scenario. But Big O notation is about the worst-case scenario. That’s O(n) time (simple search still takes). It’s a reassurance that simple search will never be slower than O(n) time.</p>\n<h4>Algorithm running times grow at different rates</h4>\n<p>Let’s assume it takes 1 millisecond to check one entry. With simple search, doctor has to check 10 entries, so the search takes 10 ms to run. On the other hand, he only has to check 3 elements with <em>binary search algorithm</em> (log10 is roughly 3), so that search takes 3 ms to run. </p>\n<p>But realistically, the list will have more than hundred elements. </p>\n<p><em>If it does, how long will simple search take? How long will binary search take?</em></p>\n<p>The run time for simple search with 1 billion items will be 1 billion ms, which is 11 days. The problem is, the run times for binary search and simple search <em>don’t grow at the same rate</em>.</p>\n<p align="center">\n  <img src="https://user-images.githubusercontent.com/5860906/31781165-723a053c-b500-11e7-937c-7b33db281efe.png">\n</p>\n<p>So as the list of numbers gets bigger, binary search becomes a lot faster than simple search.That is, as the number of items increases, binary search takes a little more time to run. But simple search takes a <em>lot</em> more time to run. So as the list of numbers gets bigger, binary search becomes a lot faster than simple search. </p>\n<p><em>That’s why it’s not enough to know how long an algorithm takes to run — you need to know how the running time increases as the list size increases. That’s where Big O notation comes in.</em></p>\n<h4>Big O notation lets you compare the number of operations</h4>\n<p>For example, suppose you have a list of size n. Simple search needs to check each element, so it will take n operations. The run time in Big O notation is O(n). </p>\n<p><em>Where are the seconds?</em></p>\n<p>There are none — Big O doesn’t tell you the speed in seconds. <em>Big O notation lets you compare the number of operations.</em> It tells you how fast the algorithm grows.</p>\n<p align="center">\n  <img src="https://user-images.githubusercontent.com/5860906/31781175-768c208e-b500-11e7-9718-e632d1391e2d.png">\n</p\n<h4>Most common running times for algorithms</h4>\n<p>A list of the most common running times for algorithms in terms of Big O notation. \nHere are five Big O run times that you’ll encounter a lot, sorted from fastest to slowest:</p>\n<ol>\n<li>O(log n), also known as <em>log time</em>. \nExample: Binary search.</li>\n<li>O(n), also known as <em>linear time</em>. \nExample: Simple search.</li>\n<li>O(n * log n)\nExample: A fast sorting algorithm, like quicksort (coming up in chapter 4).</li>\n<li>O(n2)\nExample: A slow sorting algorithm, like selection sort (coming up in chapter 2).</li>\n<li>O(n!)\nExample: A really slow algorithm, like the traveling salesperson (coming up next!).</li>\n</ol>\n<p><em>This article only covers the very basics of Big O. For a more in-depth explanation take a look at their respective FreeCodeCamp guides for algorithms.</em></p>\n<h3>More Information</h3>\n<ul>\n<li><a href="https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation">Khan Academy</a></li>\n<li><a href="http://bigocheatsheet.com/">Big O cheat sheet</a></li>\n</ul>',fields:{slug:"/computer-science/notation/big-o-notation/"},frontmatter:{title:"Big O Notation"}}},pathContext:{slug:"/computer-science/notation/big-o-notation/"}}}});
//# sourceMappingURL=path---computer-science-notation-big-o-notation-b6e36791e59c1e5570ef.js.map