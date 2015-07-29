//<![CDATA[
       if (typeof(jQuery) == 'undefined') {
 //output the script (load it from google api)
 document.write("<scr" + "ipt type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\"></scr" + "ipt>");
}
       //]]>
       </script>
       
       <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>       
       <script type='text/javascript'>
        
         <b:if cond='data:post.numComments != 0'>
         var Items = <data:post.commentJso/>;
         var Msgs = <data:post.commentMsgs/>;
         var Config = <data:post.commentConfig/>;
        <b:else/>
         var Items = {};
         var Msgs = {};
         var Config = {&#39;maxThreadDepth&#39;:&#39;0&#39;};
        </b:if>
       //<![CDATA[
       //Global setting
								Config.maxThreadDepth = 5;//How threaded level that you want
								Display_Emo = true;//Display emoticon or not? set "false" to no display
								Replace_Youtube_Link = false;//Auto replace youtube link to iframe embedded, choose "false" to disable
								Replace_Image_Link = false;//Auto replace an image link  choose "false" to disable.
                                Replace_Force_Tag = true;//Auto replace an virtual tag example: [pre] to <pre>, and [/pre] </pre>, If user input wrong , your layout will be gone. Then becare ful when enable this trap
								Replace_Image_Ext = ['JPG', 'GIF', 'PNG', 'BMP'];//(support: jpg, gif, png, bmp),only effect when Replace_Image_Link=true
								
								//Config emoticons declare
								Emo_List = [
								':)'		,'http://1.bp.blogspot.com/-2Z7Cwe04x-Q/UH9THzWWJII/AAAAAAAACtA/ChwawyzYsDI/s1600/smile1.gif',
								':('		,'http://4.bp.blogspot.com/-yXc7xHs5mXc/UKhVJLBfdaI/AAAAAAAADPY/LJKRsefyeao/s1600/sad.gif',
								'=('		,'http://1.bp.blogspot.com/-7I8DdEs58z0/UKhVKHT1yUI/AAAAAAAADPg/Lyzv-E74EdM/s1600/sadanimated.gif',
								'^_^'		,'http://1.bp.blogspot.com/-IoZJlpB0-dE/UKhVKnR0BDI/AAAAAAAADPo/Kz87N1Aj4X8/s1600/smile.gif',
								':D'		,'http://3.bp.blogspot.com/-WeTjMT8JDhg/UKhVHlZ88II/AAAAAAAADPI/b1gpiAvIkCc/s1600/icon_smile.gif',
								'=D'		,'http://1.bp.blogspot.com/-ljeobbA3sn0/UKhVGtJsGRI/AAAAAAAADPA/8lyzE4JwrwQ/s1600/hihi.gif',
                       '|o|'		,'http://4.bp.blogspot.com/-ip66eq3uRI8/UKhVF-QK8lI/AAAAAAAADO4/P0G-1PcWpQs/s1600/applause.gif',
								'@@,'		,'http://4.bp.blogspot.com/-w1VfvgO2-e8/UKhVIT7XLhI/AAAAAAAADPQ/cJ0KDjEsoj4/s1600/rolleyes.gif',
								' ;)'		,'http://3.bp.blogspot.com/-5zPfqshivtY/UKhVONWZnkI/AAAAAAAADQI/iCDxagcaj5s/s1600/wink.gif',
								':-bd'		,'http://4.bp.blogspot.com/-hPd-oj2Bzo4/UKhVLkmQjOI/AAAAAAAADPw/3O1iuAukZXg/s1600/thumb.gif',
								':-d'		,'http://2.bp.blogspot.com/-yElQmFAIiII/UKhVMcObcQI/AAAAAAAADP4/-qdEpW8zCmY/s1600/thumbsup.gif',	
                                                  ':P'		,'http://2.bp.blogspot.com/-bs2e9gRj748/UKhVNKLs2YI/AAAAAAAADQA/mF7lDNOChac/s1600/wee.gif',
                       ':ngakak:'		,'http://www.freesmileys.org/smileys/smiley-laughing021.gif',
								];	
								
                                
                                //Config Force tag list, define all in lower case
                                Force_Tag = [
                                    '[pre]','<pre>',
                                    '[/pre]','</pre>',
                                    '<pre class="brush: plain; title: ; notranslate" title="">','&lt;code&gt;',
                                    '</pre>','</code>'
                                ];
							
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 q=\'.X\';3 Z=$(\'#J-W\').D(\'y\');w 1E(F){3 1G=\' \\n\\r\\t\\f\\1V\\1W\\1X\\29\\2a\\2c\\2i\\2n\\2q\\2r\\2t\\2v\\2C\\2D\\2I\\2J\\1L\\1N\\1O\\1P\\1Q\\1S\\1T\';G(3 i=0;i<F.5;i++){b(1G.g(F.28(i))!=-1){F=F.d(0,i);1e}}C F}$(\'#2l .1y p\').k(w(B,8){b(2B){3 m=\'1f://13.11.10/1h?v=\';3 7=8.g(m);H(7!=-1){1u=8.d(7);K=1E(1u);3 Y=K.g(\'&\');3 P=\'\';b(Y==-1){P=K.d(m.5)}15{P=K.d(m.5,Y)}3 1A=\'<1r E="1Y" y="1f://13.11.10/1Z/\'+P+\'?21=1" 22="0" 23></1r>\';8=8.d(0,7)+1A+8.d(7+K.5);7=8.g(m);b(7==-1){m=\'24://13.11.10/1h?v=\';7=8.g(m)}}}b(27){3 18=\'\';3 u=8;G(3 i=0;i<1i.5;i++){3 m=\'.\'+1i[i];3 o=u.I();3 7=o.g(m);H(7!=-1){l=u.d(0,7+m.5);o=l.I();3 x=\'2o://\';3 z=o.g(x);3 M=\'\';H(z!=-1){M=x.V();l=l.d(z+x.5);o=l.I();z=o.g(x)}x=\'2L://\';o=l.I();z=o.g(x);H(z!=-1){M=x.V();l=l.d(z+x.5);o=l.I();z=o.g(x)}b(M==\'\'||l.5<6){1e}l=M+l;18+=u.d(0,7+m.5-l.5)+\'<U y="\'+l+\'" E="2x"/>\';u=u.d(7+m.5);o=u.I();7=o.g(m)}}8=18+u}b(1g){3 5=A.5;b(5%2==1){5--}G(3 i=0;i<5;i+=2){3 R=\'<U y="\'+A[i+1]+\'" E="1k"/>\';7=8.g(A[i]);H(7!=-1){8=8.d(0,7)+R+8.d(7+A[i].5);7=8.g(A[i])}}}b(1K){3 5=Q.5;b(5%2==1){5--}G(3 i=0;i<5;i+=2){H(1){3 u=8.V();7=u.g(Q[i]);b(7!=-1){8=8.d(0,7)+Q[i+1]+8.d(7+Q[i].5)}15{1e}}}}C 8});$(\'.1M\').k(w(B,8){b(1g){3 5=A.5;b(5%2==1){5--}3 12=\'\';G(3 i=0;i<5;i+=2){3 1v=\'<1w>\'+A[i]+\'</1w>\';3 R=\'<U y="\'+A[i+1]+\'" E="1k"/>\';12+=\'<O E="1R">\'+R+1v+\'</O>\'}C 12}});$(\'.1B .1y p\').k(w(i,h){14=h.V();B=14.g(\'@<a 16="#c\');b(B!=-1){17=14.g(\'</a>\',B);b(17!=-1){h=h.d(0,B)+h.d(17+4)}}C h});w 1j(j){r=j.g(\'c\');b(r!=-1)j=j.d(r+1);C j}w 1l(j){j=\'&20=\'+j+\'#%1m\';1n=Z.1o(/#%1m/,j);C 1n}w 1p(){k=$(q).k();$(q).k(\'\');q=\'.X\';$(q).k(k);$(\'#J-W\').D(\'y\',Z);$(\'.25\').26()}w 1q(e){j=$(e).D(\'19\');j=1j(j);k=$(q).k();b(q==\'.X\'){1s=\'<a E="2b-J" 16="#1t" 2d="1p()">\'+2e.2f+\'</a><a 2g="1t"/>\';$(q).k(1s)}15{$(q).k(\'\')}q=\'#2h\'+j;$(q).k(k);$(\'#J-W\').D(\'y\',1l(j))}1a=2j.2k.16;1b=\'#J-2m\';1c=1a.g(1b);b(1c!=-1){1x=1a.d(1c+1b.5);1q(\'#2p\'+1x)}G(3 i=0;i<T.5;i++){b(\'1z\'2s T[i]){3 j=T[i].1z;3 1d=2u($(\'#c\'+j+\':N\').D(\'1C-1D\'));$(\'#c\'+j+\' .2w:N\').k(w(B,8){3 L=T[i].19;b(1d>=2y.2z){$(\'#c\'+L+\':N .2A\').1F()}3 S=$(\'#c\'+L+\':N\').k();S=\'<O E="1B" 19="c\'+L+\'" 1C-1D="\'+(1d+1)+\'">\'+S+\'</O>\';$(\'#c\'+L).1F();C(8+S)})}}3 1H=$("#2E");1H.2F(\'.2G U\').2H(w(){3 1I=$(1J).D(\'y\');$(1J).2K().D(\'y\',1I.1o(/\\/s[0-9]+(\\-c)?\\//,"/1U-c/"))});',62,172,'|||var||length||check_index|oldhtml|||if||substring|||indexOf|||par_id|html|img_src|search_key||upper_html||Cur_Cform_Hdr||||temp_html||function|http_search|src|find_http|Emo_List|index|return|attr|class|str|for|while|toUpperCase|comment|yt_link|child_id|save_http|first|div|yt_code|Force_Tag|img_html|child_html|Items|img|toLowerCase|editor|comment_form|yt_code_index|Cur_Cform_Url|com|youtube|newhtml|www|temp|else|href|index_tail|save_html|id|cur_url|search_formid|search_index|par_level|break|http|Display_Emo|watch|Replace_Image_Ext|Valid_Par_Id|comment_emo|Cform_Ins_ParID|7B|n_cform_url|replace|Reset_Comment_Form|Display_Reply_Form|iframe|reset_html|origin_cform|ht|img_code|span|ret_id|comment_body|parentId|yt_video|comment_wrap|data|level|trim|remove|whitespace|avatar|ava|this|Replace_Force_Tag|u2008|comment_emo_list|u2009|u200a|u200b|u2028|item|u2029|u3000|s45|x5b|x5d|x7c|comment_youtube|embed|parentID|autohide|frameborder|allowfullscreen|https|cancel|hide|Replace_Image_Link|charAt|x7d|x3c|add|x3e|onclick|Msgs|addComment|name|r_f_c|x0b|window|location|comment_block|form_|xa0|HTTP|rc|u2000|u2001|in|u2002|parseInt|u2003|comment_child|comment_img|Config|maxThreadDepth|comment_reply|Replace_Youtube_Link|u2004|u2005|comments|find|comment_avatar|each|u2006|u2007|show|HTTPS'.split('|'),0,{}))

							//]]>
