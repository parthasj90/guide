webpackJsonp([0xc4fdef6b50a8],{5972:function(e,n){e.exports={data:{markdownRemark:{html:'<h1>Scanning</h1>\n<h2>Introduction</h2>\n<p>Network Scanning refers to a set of procedures for indentifying hosts, posts and services on a network.</p>\n<p>Scanning activities can involve:\nChecking for Open Ports on a Network,\nBanner Grabbing,\nCreating Network Diagrams</p>\n<h2>Scanning Techniques</h2>\n<p>One of the most common ways to scan a a network is a technique called a Ping Sweep. This can determine the live hosts on a range of IP address. A really simple example of this is just going to your command line and typing <code>ping 8.8.8.8</code>. This will send an <a href="https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol">ICMP</a> ECHO request to a host, in this case it will be Google’s Public DNS.</p>\n<p>Different Internet protocols require different methods of scanning; for example scanning a <a href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol">TCP</a> network would be different to scanning a <a href="https://en.wikipedia.org/wiki/User_Datagram_Protocol">UDP</a> network.</p>\n<p>TCP scans generally take advantage of the way in which TCP operates and how TCP goes through a “handshake” to initiate communication on a network. </p>\n<ol>\n<li>A device (Host A) attempting to communicate across a network to another device (Server B) will send a SYN message.</li>\n<li>B needs to reply to A with an SYN and an ACK to acknowledge B’s request to start communication</li>\n<li>A needs to send back an ACK message to acknowledge B’s response.</li>\n<li>Communication can then start </li>\n</ol>\n<p>Throughout this communication, there are bits of information that each participant sends in an attempt to initiate the conversation. </p>\n<p>There are a lot more types of <a href="https://nmap.org/bennieston-tutorial/">scans</a> that further abuse the TCP Handshake process; such as IDLE scans, Xmas tree scans, Inverse TCP scans and Full Scans</p>\n<h2>Tools</h2>\n<p>There are many tools available for this but one of the most common is <code>nmap</code>.\n<a href="https://www.youtube.com/watch?v=Hk-21p2m8YY">You can watch a great talk from Gordon Lyon aka Fydor, the creator of the nmap tool</a>\n<code>nmap</code> is a pretty useful tool with so many functions (getting information about live hosts on a network, services that are running, types and versions of OS being used) and is beyond the scope of this article to explain them all. But go check it out if you haven’t already!</p>\n<h2>Anything else?</h2>\n<p>IPv6 Networks can also be scanned.</p>\n<p>IPv6 increases the IP address size to make a lot more addresses available</p>',fields:{slug:"/security/scanning/"},frontmatter:{title:"Scanning"}}},pathContext:{slug:"/security/scanning/"}}}});
//# sourceMappingURL=path---security-scanning-c2b2afb06fd5f92a53f0.js.map