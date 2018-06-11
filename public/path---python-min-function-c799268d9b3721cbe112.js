webpackJsonp([51236804007712],{5880:function(e,n){e.exports={data:{markdownRemark:{html:"<p><code>min()</code> is a built-in function in Python 3. It returns the smallest item in an iterable or the smallest of two or more arguments.</p>\n<h2>Arguments</h2>\n<p>This function takes two or more numbers or any kind of iterable as an argument. While giving an iterable as an argument we must make sure that all the elements in the iterable are of the same type. This means that we cannot pass a list which has both string and integer values stored in it.</p>\n<p>Valid Arguments:  </p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>min(2, 3)\nmin([1, 2, 3])\nmin('a', 'b', 'c')</code></pre>\n      </div>\n<p>Invalid Arguments:  </p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>min(2, 'a')\nmin([1, 2, 3, 'a'])\nmin([])</code></pre>\n      </div>\n<h2>Return Value</h2>\n<p>The smallest item in the iterable is returned. If two or more positional arguments are provided, the smallest of the positional arguments<br>\nis returned. If the iterable is empty and default is not provided, a ValueError is raised.</p>\n<h2>Code Sample</h2>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values\nprint(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values\n\nlist1 = [1, 2, 4, 5, -54]\nprint(min(list1)) # Returns -54 as -54 is the smallest value in the list\n\nlist2 = ['a', 'b', 'c' ]\nprint(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order\n\nlist3 = [1, 2, 'abc', 'xyz']\nprint(min(list3)) # Gives TypeError as values in the list are of different type\n\n#Fix the TypeError mentioned above first before moving on to next step\n\nlist4 = []\nprint(min(list4)) # Gives ValueError as the argument is empty</code></pre>\n      </div>\n<p><img src=\"//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2\" title=\":rocket:\" alt=\":rocket:\" class=\"forum-image\"> <a href='https://repl.it/CVir/4' target='_blank' rel='nofollow'>Run Code</a></p>\n<p><a href='https://docs.python.org/3/library/functions.html#min' target='_blank' rel='nofollow'>Official Docs</a></p>",fields:{slug:"/python/min-function/"},frontmatter:{title:"Python Min Function"}}},pathContext:{slug:"/python/min-function/"}}}});
//# sourceMappingURL=path---python-min-function-c799268d9b3721cbe112.js.map