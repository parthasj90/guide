webpackJsonp([0x7670962703f4],{5655:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>When do you need to overwrite local files?</h1>\n<p>If you feel the need to discard all your local changes and just reset/overwrite everything with a copy from the remote branch then you should follow this guide.</p>\n<p>Important: If you have any local changes, they will be lost. With or without <code>--hard</code> option, any local commits that haven’t been pushed will be lost.<br>\nIf you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.</p>\n<h2>The Overwrite workflow:</h2>\n<p>To overwrite your local files do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git fetch --all\ngit reset --hard <remote>/<branch_name></code></pre>\n      </div>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git fetch --all\ngit reset --hard origin/master</code></pre>\n      </div>\n<h2>How it works:</h2>\n<p><code>git fetch</code> downloads the latest from remote without trying to merge or rebase anything.</p>\n<p>Then the git reset resets the master branch to what you just fetched. The <code>--hard</code> option changes all the files in your working tree to match the files in <code>origin/master</code>.</p>\n<h2>Additional Information:</h2>\n<p>It’s worth noting that it is possible to maintain current local commits by creating a branch from <code>master</code> or whichever branch you want to work on before resetting:</p>\n<p>For Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git checkout master\ngit branch new-branch-to-save-current-commits\ngit fetch --all\ngit reset --hard origin/master</code></pre>\n      </div>\n<p>After this, all of the old commits will be kept in <code>new-branch-to-save-current-commits</code>. Uncommitted changes however (even staged), will be lost. Make sure to stash and commit anything you need.</p>\n<h2>Attribution:</h2>\n<p><em>This article is based on a Stack Overflow question &#x3C;a href=’<a href="http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull/8888015#8888015">http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull/8888015#8888015</a>’ target=’</em>blank’ rel=‘nofollow’>here</a>_</p>',fields:{slug:"/miscellaneous/override-local-files-with-git-pull/"},frontmatter:{title:"Override Local Files with Git Pull"}}},pathContext:{slug:"/miscellaneous/override-local-files-with-git-pull/"}}}});
//# sourceMappingURL=path---miscellaneous-override-local-files-with-git-pull-d95ca5e62a1e90bf92b1.js.map