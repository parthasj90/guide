webpackJsonp([0x7b6ad0a40658],{6326:function(e,n){e.exports={data:{markdownRemark:{html:"<h1>Vim Modes</h1>\n<p>Because Vim is focused on changing existing code just as much as writing new\ncode, it is split into several modes that each have different purposes.</p>\n<h3>Normal Mode</h3>\n<p>By default, Vim starts in “normal” mode.\nNormal mode can be accessed from other modes by pressing <code>Esc</code> or <code>&#x3C;C-[></code>.</p>\n<p>In Normal mode key presses don’t work as one would expect. That is, they don’t insert text into the document; instead,\ncertain key presses can:</p>\n<h4>Move the cursor</h4>\n<ul>\n<li><strong>h</strong>   move one character left    </li>\n<li><strong>j</strong>   move one row down          </li>\n<li><strong>k</strong>   move one row up            </li>\n<li><strong>l</strong>   move one character right   </li>\n</ul>\n<p>As many vim commands, row movement can be prefixed by a number to move s\neveral lines at a time:                                                 </p>\n<ul>\n<li><strong>4j</strong>  move 4 rows down                                              </li>\n<li><strong>6k</strong>  move 6 rows up<br>\n</li>\n</ul>\n<p>Basic word movements:                                                  </p>\n<ul>\n<li><strong>w</strong>   move to beginning of next word                                </li>\n<li><strong>b</strong>   move to previous beginning of word                            </li>\n<li><strong>e</strong>   move to end of word                                           </li>\n<li><strong>W</strong>   move to beginning of next word after a whitespace             </li>\n<li><strong>B</strong>   move to beginning of previous word before a whitespace        </li>\n<li><strong>E</strong>   move to end of word before a whitespace                       </li>\n</ul>\n<p>Beginning/End of line movement:                 </p>\n<ul>\n<li><strong>0</strong>   move to the beginning of the line     </li>\n<li><strong>$</strong>   move to the end of the line           </li>\n</ul>\n<h4>Manipulate text</h4>\n<h4>Enter other modes</h4>\n<p><strong>Normal mode</strong> is where one should spend most of their time while using Vim. Remember,\nthis is what makes Vim different.</p>\n<h3>Insert Mode</h3>\n<p>This is the second most used mode, and will be the most familiar behavior\nto most people. Once in insert mode, typing inserts characters just like a regular\ntext editor. You can enter it by using an insert command from normal mode.</p>\n<p>Insert commands include:</p>\n<ul>\n<li><code>i</code> for ’<strong>i</strong>nsert’, this immediately switches vim to insert mode</li>\n<li><code>a</code> for ’<strong>a</strong>ppend’, this moves the cursor after the current character and enters insert mode</li>\n<li><code>o</code> inserts a new line below the current line and enters insert mode on the new line</li>\n</ul>\n<p>These commands have an uppercase variety too:</p>\n<ul>\n<li><code>I</code> moves the cursor to the beginning of the line and enters insert mode</li>\n<li><code>A</code> moves the cursor to the end of the line and enters insert mode</li>\n<li><code>O</code> inserts a new line above the current one and enters insert mode on the new line</li>\n</ul>\n<p>There are so many more ways of inserting text in Vim that can’t be listed here\nbut these are the simplest. Also, beware of staying in insert mode for too long; Vim is\nnot designed to be used in insert mode all the time.</p>\n<p>To leave insert mode and return to normal mode, press <code>Esc</code> or <code>&#x3C;C-[></code></p>\n<h3>Visual Mode</h3>\n<p>Visual mode is used to make selections of text, similar to how clicking and dragging with a\nmouse behaves. Selecting text allows commands to apply only to the selection, such as copying,\ndeleting, replacing, and so on.</p>\n<p>To make a text selection:</p>\n<ul>\n<li>\n<p>Press <code>v</code> to enter visual mode, this will also mark a starting selection point</p>\n</li>\n<li>\n<p>Move the cursor to the desired end selection point; vim will provide a visual\nhighlight of the text selection</p>\n</li>\n</ul>\n<p>Visual mode also has the following variants:</p>\n<ul>\n<li><code>V</code> to enter visual line mode, this will make text selections by line</li>\n<li><code>&#x3C;C-V></code> to enter visual block mode, this will make text selections by blocks; moving the\ncursor will make rectangle selections of the text</li>\n</ul>\n<p>To leave visual mode and return to normal mode, press <code>Esc</code> or <code>&#x3C;C-[></code>.</p>\n<p>The visual mode actually has multiple subtypes:  <em>visual</em>, <em>block-visual</em> and <em>linewise-visual</em></p>\n<ul>\n<li><em>visual</em>: like described above. Enter by pressing <code>v</code></li>\n<li><em>block-visual</em>: select any rectangular region. Enter by pressing <code>&#x3C;ctrl>+v</code></li>\n<li><em>linewise-visual</em>: always select full lines. Enter by pressing <code>&#x3C;shift>+v</code></li>\n</ul>\n<h3>Command Mode</h3>\n<p>Command mode has a wide variety of commands and can do things that normal mode\ncan’t do as easily.  To enter command mode type ’:’ from normal mode and then\ntype your command which should appear at the bottom of the window.\nFor example, to do a global find and replace type <code>:%s/foo/bar/g</code> to replace\nall ‘foo’ with ‘bar’</p>\n<ul>\n<li><code>:</code> Enters command mode</li>\n<li><code>%</code> Means across all lines</li>\n<li><code>s</code> Means substitute</li>\n<li><code>/foo</code> is regex to find things to replace</li>\n<li><code>/bar/</code> is regex to replace things with</li>\n<li><code>/g</code> means global, otherwise it would only execute once per line</li>\n</ul>\n<p>Vim has a number of other methods that you can read about in the help\ndocumentation, <code>:h</code> or <code>:help</code>.</p>\n<h3>Replace Mode</h3>\n<p>Replace mode allows you replace existing text by directly typing over it.\nBefore entering this mode, get into normal mode and put your cursor\non top of the first character that you want to replace. Then press ‘R’ (capital R) to\nenter replace mode. Now whatever you type will replace the existing text. The\ncursor automatically moves to the next character just like in insert mode. The\nonly difference is that every character you type will replace the existing one.</p>",fields:{slug:"/vim/modes/"},frontmatter:{title:"Modes in Vim"}}},pathContext:{slug:"/vim/modes/"}}}});
//# sourceMappingURL=path---vim-modes-a9b76d70502eac5b6872.js.map