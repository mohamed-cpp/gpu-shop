/*!
 * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#868e96;--gray-dark:#343a40;--primary:#007bff;--secondary:#868e96;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--font-family-monospace:"SFMono-Regular",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}abbr[title]::after{content:" (" attr(title) ")"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}@-ms-viewport{width:device-width}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}[role=button],a,area,button,input:not([type=range]),label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#868e96;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:5px}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#868e96}.blockquote-footer::before{content:"\2014 \00A0"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;transition:all .2s ease-in-out;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#868e96}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}code{padding:.2rem .4rem;font-size:90%;color:#bd4147;background-color:#f8f9fa;border-radius:.25rem}a>code{padding:0;color:inherit;background-color:inherit}kbd{padding:.2rem .4rem;font-size:90%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;margin-top:0;margin-bottom:1rem;font-size:90%;color:#212529}pre code{padding:0;font-size:inherit;color:inherit;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1200px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #e9ecef}.table thead th{vertical-align:bottom;border-bottom:2px solid #e9ecef}.table tbody+tbody{border-top:2px solid #e9ecef}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #e9ecef}.table-bordered td,.table-bordered th{border:1px solid #e9ecef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#dddfe2}.table-hover .table-secondary:hover{background-color:#cfd2d6}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#cfd2d6}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#e9ecef}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}@media (max-width:575px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm.table-bordered{border:0}}@media (max-width:767px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md.table-bordered{border:0}}@media (max-width:991px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg.table-bordered{border:0}}@media (max-width:1199px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive.table-bordered{border:0}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-image:none;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#868e96;opacity:1}.form-control:-ms-input-placeholder{color:#868e96;opacity:1}.form-control::-ms-input-placeholder{color:#868e96;opacity:1}.form-control::placeholder{color:#868e96;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.col-form-legend{padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;font-size:1rem}.form-control-plaintext{padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.form-control-plaintext.input-group-addon,.input-group-lg>.input-group-btn>.form-control-plaintext.btn,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.form-control-plaintext.input-group-addon,.input-group-sm>.input-group-btn>.form-control-plaintext.btn{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;margin-bottom:.5rem}.form-check.disabled .form-check-label{color:#868e96}.form-check-label{padding-left:1.25rem;margin-bottom:0}.form-check-input{position:absolute;margin-top:.25rem;margin-left:-1.25rem}.form-check-inline{display:inline-block;margin-right:.75rem}.form-check-inline .form-check-label{vertical-align:middle}.valid-feedback{display:none;margin-top:.25rem;font-size:.875rem;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;width:250px;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(40,167,69,.8);border-radius:.2rem}.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.form-check-input.is-valid+.form-check-label,.was-validated .form-check-input:valid+.form-check-label{color:#28a745}.custom-control-input.is-valid~.custom-control-indicator,.was-validated .custom-control-input:valid~.custom-control-indicator{background-color:rgba(40,167,69,.25)}.custom-control-input.is-valid~.custom-control-description,.was-validated .custom-control-input:valid~.custom-control-description{color:#28a745}.custom-file-input.is-valid~.custom-file-control,.was-validated .custom-file-input:valid~.custom-file-control{border-color:#28a745}.custom-file-input.is-valid~.custom-file-control::before,.was-validated .custom-file-input:valid~.custom-file-control::before{border-color:inherit}.custom-file-input.is-valid:focus,.was-validated .custom-file-input:valid:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;margin-top:.25rem;font-size:.875rem;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;width:250px;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220,53,69,.8);border-radius:.2rem}.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid+.form-check-label,.was-validated .form-check-input:invalid+.form-check-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-indicator,.was-validated .custom-control-input:invalid~.custom-control-indicator{background-color:rgba(220,53,69,.25)}.custom-control-input.is-invalid~.custom-control-description,.was-validated .custom-control-input:invalid~.custom-control-description{color:#dc3545}.custom-file-input.is-invalid~.custom-file-control,.was-validated .custom-file-input:invalid~.custom-file-control{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-control::before,.was-validated .custom-file-input:invalid~.custom-file-control::before{border-color:inherit}.custom-file-input.is-invalid:focus,.was-validated .custom-file-input:invalid:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group{width:auto}.form-inline .form-check{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;margin-top:0;margin-bottom:0}.form-inline .form-check-label{padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-left:0}.form-inline .custom-control-indicator{position:static;display:inline-block;margin-right:.25rem;vertical-align:text-bottom}.form-inline .has-feedback .form-control-feedback{top:0}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not([disabled]):not(.disabled).active,.btn:not([disabled]):not(.disabled):active{background-image:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#007bff;border-color:#007bff}.btn-primary:not([disabled]):not(.disabled).active,.btn-primary:not([disabled]):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-secondary{color:#fff;background-color:#868e96;border-color:#868e96}.btn-secondary:hover{color:#fff;background-color:#727b84;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(134,142,150,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#868e96;border-color:#868e96}.btn-secondary:not([disabled]):not(.disabled).active,.btn-secondary:not([disabled]):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#666e76;box-shadow:0 0 0 .2rem rgba(134,142,150,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#28a745;border-color:#28a745}.btn-success:not([disabled]):not(.disabled).active,.btn-success:not([disabled]):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8}.btn-info:not([disabled]):not(.disabled).active,.btn-info:not([disabled]):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-warning{color:#111;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#111;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107}.btn-warning:not([disabled]):not(.disabled).active,.btn-warning:not([disabled]):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#111;background-color:#d39e00;border-color:#c69500;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545}.btn-danger:not([disabled]):not(.disabled).active,.btn-danger:not([disabled]):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-light{color:#111;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#111;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-light.disabled,.btn-light:disabled{background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not([disabled]):not(.disabled).active,.btn-light:not([disabled]):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#111;background-color:#dae0e5;border-color:#d3d9df;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-dark.disabled,.btn-dark:disabled{background-color:#343a40;border-color:#343a40}.btn-dark:not([disabled]):not(.disabled).active,.btn-dark:not([disabled]):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not([disabled]):not(.disabled).active,.btn-outline-primary:not([disabled]):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#868e96;background-color:transparent;background-image:none;border-color:#868e96}.btn-outline-secondary:hover{color:#fff;background-color:#868e96;border-color:#868e96}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(134,142,150,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#868e96;background-color:transparent}.btn-outline-secondary:not([disabled]):not(.disabled).active,.btn-outline-secondary:not([disabled]):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#868e96;border-color:#868e96;box-shadow:0 0 0 .2rem rgba(134,142,150,.5)}.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not([disabled]):not(.disabled).active,.btn-outline-success:not([disabled]):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not([disabled]):not(.disabled).active,.btn-outline-info:not([disabled]):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}.btn-outline-warning:hover{color:#fff;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not([disabled]):not(.disabled).active,.btn-outline-warning:not([disabled]):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#ffc107;border-color:#ffc107;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not([disabled]):not(.disabled).active,.btn-outline-danger:not([disabled]):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not([disabled]):not(.disabled).active,.btn-outline-light:not([disabled]):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not([disabled]):not(.disabled).active,.btn-outline-dark:not([disabled]):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;background-color:transparent}.btn-link:hover{color:#0056b3;text-decoration:underline;background-color:transparent;border-color:transparent}.btn-link.focus,.btn-link:focus{border-color:transparent;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#868e96}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}.dropdown,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropup .dropdown-menu{margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background:0 0;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#868e96;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#868e96;white-space:nowrap}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:0 1 auto;flex:0 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:2}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn+.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.btn+.dropdown-toggle-split::after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group .form-control{position:relative;z-index:2;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover{z-index:3}.input-group .form-control,.input-group-addon,.input-group-btn{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{white-space:nowrap}.input-group-addon{padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:not(:last-child),.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:not(:last-child){border-right:0}.input-group .form-control:not(:first-child),.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.form-control+.input-group-addon:not(:first-child){border-left:0}.input-group-btn{position:relative;-ms-flex-align:stretch;align-items:stretch;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:3}.input-group-btn:first-child>.btn+.btn{margin-left:0}.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group{margin-right:-1px}.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group{z-index:2;margin-left:0}.input-group-btn:not(:first-child)>.btn-group:first-child,.input-group-btn:not(:first-child)>.btn:first-child{margin-left:-1px}.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover{z-index:3}.custom-control{position:relative;display:-ms-inline-flexbox;display:inline-flex;min-height:1.5rem;padding-left:1.5rem;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-indicator{color:#fff;background-color:#007bff}.custom-control-input:focus~.custom-control-indicator{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:active~.custom-control-indicator{color:#fff;background-color:#b3d7ff}.custom-control-input:disabled~.custom-control-indicator{background-color:#e9ecef}.custom-control-input:disabled~.custom-control-description{color:#868e96}.custom-control-indicator{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#ddd;background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox .custom-control-indicator{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator{background-color:#007bff;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E")}.custom-radio .custom-control-indicator{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-indicator{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")}.custom-controls-stacked{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.custom-controls-stacked .custom-control{margin-bottom:.25rem}.custom-controls-stacked .custom-control+.custom-control{margin-left:0}.custom-select{display:inline-block;max-width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple]{height:auto;background-image:none}.custom-select:disabled{color:#868e96;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-file{position:relative;display:inline-block;max-width:100%;height:calc(2.25rem + 2px);margin-bottom:0}.custom-file-input{min-width:14rem;max-width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-control{box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #007bff}.custom-file-control{position:absolute;top:0;right:0;left:0;z-index:5;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-control:lang(en):empty::after{content:"Choose file..."}.custom-file-control::before{position:absolute;top:-1px;right:-1px;bottom:-1px;z-index:6;display:block;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#e9ecef;border:1px solid #ced4da;border-radius:0 .25rem .25rem 0}.custom-file-control:lang(en)::before{content:"Browse"}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#868e96}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #ddd}.nav-tabs .nav-link.disabled{color:#868e96;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#ddd #ddd #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background:0 0;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:"";background:no-repeat center center;background-size:100% 100%}@media (max-width:575px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:767px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:991px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:1199px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .dropup .dropdown-menu{top:auto;bottom:100%}}.navbar-expand{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .dropup .dropdown-menu{top:auto;bottom:100%}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-ms-flexbox;display:flex;-ms-flex:1 0 0%;flex:1 0 0%;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-group .card{margin-bottom:15px}@media (min-width:576px){.card-group{-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group .card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group .card+.card{margin-left:0;border-left:0}.card-group .card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group .card:first-child .card-img-top{border-top-right-radius:0}.card-group .card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group .card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group .card:last-child .card-img-top{border-top-left-radius:0}.card-group .card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group .card:only-child{border-radius:.25rem}.card-group .card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group .card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group .card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#868e96;content:"/"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#868e96}.pagination{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#868e96;pointer-events:none;background-color:#fff;border-color:#ddd}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #ddd}.page-link:focus,.page-link:hover{color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#ddd}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#868e96}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#6c757d}.badge-success{color:#fff;background-color:#28a745}.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b}.badge-warning{color:#111;background-color:#ffc107}.badge-warning[href]:focus,.badge-warning[href]:hover{color:#111;text-decoration:none;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130}.badge-light{color:#111;background-color:#f8f9fa}.badge-light[href]:focus,.badge-light[href]:hover{color:#111;text-decoration:none;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#464a4e;background-color:#e7e8ea;border-color:#dddfe2}.alert-secondary hr{border-top-color:#cfd2d6}.alert-secondary .alert-link{color:#2e3133}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#fff;background-color:#007bff}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.list-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#868e96;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}a.list-group-item-primary,button.list-group-item-primary{color:#004085}a.list-group-item-primary:focus,a.list-group-item-primary:hover,button.list-group-item-primary:focus,button.list-group-item-primary:hover{color:#004085;background-color:#9fcdff}a.list-group-item-primary.active,button.list-group-item-primary.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#464a4e;background-color:#dddfe2}a.list-group-item-secondary,button.list-group-item-secondary{color:#464a4e}a.list-group-item-secondary:focus,a.list-group-item-secondary:hover,button.list-group-item-secondary:focus,button.list-group-item-secondary:hover{color:#464a4e;background-color:#cfd2d6}a.list-group-item-secondary.active,button.list-group-item-secondary.active{color:#fff;background-color:#464a4e;border-color:#464a4e}.list-group-item-success{color:#155724;background-color:#c3e6cb}a.list-group-item-success,button.list-group-item-success{color:#155724}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#155724;background-color:#b1dfbb}a.list-group-item-success.active,button.list-group-item-success.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}a.list-group-item-info,button.list-group-item-info{color:#0c5460}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#0c5460;background-color:#abdde5}a.list-group-item-info.active,button.list-group-item-info.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}a.list-group-item-warning,button.list-group-item-warning{color:#856404}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#856404;background-color:#ffe8a1}a.list-group-item-warning.active,button.list-group-item-warning.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}a.list-group-item-danger,button.list-group-item-danger{color:#721c24}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#721c24;background-color:#f1b0b7}a.list-group-item-danger.active,button.list-group-item-danger.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}a.list-group-item-light,button.list-group-item-light{color:#818182}a.list-group-item-light:focus,a.list-group-item-light:hover,button.list-group-item-light:focus,button.list-group-item-light:hover{color:#818182;background-color:#ececf6}a.list-group-item-light.active,button.list-group-item-light.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}a.list-group-item-dark,button.list-group-item-dark{color:#1b1e21}a.list-group-item-dark:focus,a.list-group-item-dark:hover,button.list-group-item-dark:focus,button.list-group-item-dark:hover{color:#1b1e21;background-color:#b9bbbe}a.list-group-item-dark.active,button.list-group-item-dark.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}button.close{padding:0;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.show .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px;pointer-events:none}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:15px;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:15px;margin:-15px -15px -15px auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:15px}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #e9ecef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:30px auto}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:5px;height:5px}.tooltip .arrow::before{position:absolute;border-color:transparent;border-style:solid}.tooltip.bs-tooltip-auto[x-placement^=top],.tooltip.bs-tooltip-top{padding:5px 0}.tooltip.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.bs-tooltip-top .arrow{bottom:0}.tooltip.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.bs-tooltip-top .arrow::before{margin-left:-3px;content:"";border-width:5px 5px 0;border-top-color:#000}.tooltip.bs-tooltip-auto[x-placement^=right],.tooltip.bs-tooltip-right{padding:0 5px}.tooltip.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.bs-tooltip-right .arrow{left:0}.tooltip.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.bs-tooltip-right .arrow::before{margin-top:-3px;content:"";border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.bs-tooltip-auto[x-placement^=bottom],.tooltip.bs-tooltip-bottom{padding:5px 0}.tooltip.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.bs-tooltip-bottom .arrow{top:0}.tooltip.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.bs-tooltip-bottom .arrow::before{margin-left:-3px;content:"";border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bs-tooltip-auto[x-placement^=left],.tooltip.bs-tooltip-left{padding:0 5px}.tooltip.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.bs-tooltip-left .arrow{right:0}.tooltip.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.bs-tooltip-left .arrow::before{right:0;margin-top:-3px;content:"";border-width:5px 0 5px 5px;border-left-color:#000}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;border-color:transparent;border-style:solid}.popover .arrow::before{content:"";border-width:.8rem}.popover .arrow::after{content:"";border-width:.8rem}.popover.bs-popover-auto[x-placement^=top],.popover.bs-popover-top{margin-bottom:.8rem}.popover.bs-popover-auto[x-placement^=top] .arrow,.popover.bs-popover-top .arrow{bottom:0}.popover.bs-popover-auto[x-placement^=top] .arrow::after,.popover.bs-popover-auto[x-placement^=top] .arrow::before,.popover.bs-popover-top .arrow::after,.popover.bs-popover-top .arrow::before{border-bottom-width:0}.popover.bs-popover-auto[x-placement^=top] .arrow::before,.popover.bs-popover-top .arrow::before{bottom:-.8rem;margin-left:-.8rem;border-top-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=top] .arrow::after,.popover.bs-popover-top .arrow::after{bottom:calc((.8rem - 1px) * -1);margin-left:-.8rem;border-top-color:#fff}.popover.bs-popover-auto[x-placement^=right],.popover.bs-popover-right{margin-left:.8rem}.popover.bs-popover-auto[x-placement^=right] .arrow,.popover.bs-popover-right .arrow{left:0}.popover.bs-popover-auto[x-placement^=right] .arrow::after,.popover.bs-popover-auto[x-placement^=right] .arrow::before,.popover.bs-popover-right .arrow::after,.popover.bs-popover-right .arrow::before{margin-top:-.8rem;border-left-width:0}.popover.bs-popover-auto[x-placement^=right] .arrow::before,.popover.bs-popover-right .arrow::before{left:-.8rem;border-right-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=right] .arrow::after,.popover.bs-popover-right .arrow::after{left:calc((.8rem - 1px) * -1);border-right-color:#fff}.popover.bs-popover-auto[x-placement^=bottom],.popover.bs-popover-bottom{margin-top:.8rem}.popover.bs-popover-auto[x-placement^=bottom] .arrow,.popover.bs-popover-bottom .arrow{top:0}.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,.popover.bs-popover-bottom .arrow::after,.popover.bs-popover-bottom .arrow::before{margin-left:-.8rem;border-top-width:0}.popover.bs-popover-auto[x-placement^=bottom] .arrow::before,.popover.bs-popover-bottom .arrow::before{top:-.8rem;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=bottom] .arrow::after,.popover.bs-popover-bottom .arrow::after{top:calc((.8rem - 1px) * -1);border-bottom-color:#fff}.popover.bs-popover-auto[x-placement^=bottom] .popover-header::before,.popover.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:"";border-bottom:1px solid #f7f7f7}.popover.bs-popover-auto[x-placement^=left],.popover.bs-popover-left{margin-right:.8rem}.popover.bs-popover-auto[x-placement^=left] .arrow,.popover.bs-popover-left .arrow{right:0}.popover.bs-popover-auto[x-placement^=left] .arrow::after,.popover.bs-popover-auto[x-placement^=left] .arrow::before,.popover.bs-popover-left .arrow::after,.popover.bs-popover-left .arrow::before{margin-top:-.8rem;border-right-width:0}.popover.bs-popover-auto[x-placement^=left] .arrow::before,.popover.bs-popover-left .arrow::before{right:-.8rem;border-left-color:rgba(0,0,0,.25)}.popover.bs-popover-auto[x-placement^=left] .arrow::after,.popover.bs-popover-left .arrow::after{right:calc((.8rem - 1px) * -1);border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;-ms-flex-align:center;align-items:center;width:100%;transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translateX(100%);transform:translateX(100%)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translateX(-100%);transform:translateX(-100%)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%}.carousel-control-prev-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")}.carousel-control-next-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;background-color:rgba(255,255,255,.5)}.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#868e96!important}a.bg-secondary:focus,a.bg-secondary:hover{background-color:#6c757d!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #e9ecef!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#868e96!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-circle{border-radius:50%!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:""}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.d-print-block{display:none!important}@media print{.d-print-block{display:block!important}}.d-print-inline{display:none!important}@media print{.d-print-inline{display:inline!important}}.d-print-inline-block{display:none!important}@media print{.d-print-inline-block{display:inline-block!important}}@media print{.d-print-none{display:none!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:""}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;-webkit-clip-path:none;clip-path:none}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-secondary{color:#868e96!important}a.text-secondary:focus,a.text-secondary:hover{color:#6c757d!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#1e7e34!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#117a8b!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#d39e00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#bd2130!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#dae0e5!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#1d2124!important}.text-muted{color:#868e96!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.visible{visibility:visible!important}.invisible{visibility:hidden!important}
/*# sourceMappingURL=bootstrap.min.css.map */
/* Magnific Popup CSS */
.mfp-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;
  background: #0b0b0b;
  opacity: 0.8; }

.mfp-wrap {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: none !important;
  -webkit-backface-visibility: hidden; }

.mfp-container {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  box-sizing: border-box; }

.mfp-container:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle; }

.mfp-align-top .mfp-container:before {
  display: none; }

.mfp-content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045; }

.mfp-inline-holder .mfp-content,
.mfp-ajax-holder .mfp-content {
  width: 100%;
  cursor: auto; }

.mfp-ajax-cur {
  cursor: progress; }

.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {
  cursor: -moz-zoom-out;
  cursor: -webkit-zoom-out;
  cursor: zoom-out; }

.mfp-zoom {
  cursor: pointer;
  cursor: -webkit-zoom-in;
  cursor: -moz-zoom-in;
  cursor: zoom-in; }

.mfp-auto-cursor .mfp-content {
  cursor: auto; }

.mfp-close,
.mfp-arrow,
.mfp-preloader,
.mfp-counter {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none; }

.mfp-loading.mfp-figure {
  display: none; }

.mfp-hide {
  display: none !important; }

.mfp-preloader {
  color: #CCC;
  position: absolute;
  top: 50%;
  width: auto;
  text-align: center;
  margin-top: -0.8em;
  left: 8px;
  right: 8px;
  z-index: 1044; }
  .mfp-preloader a {
    color: #CCC; }
    .mfp-preloader a:hover {
      color: #FFF; }

.mfp-s-ready .mfp-preloader {
  display: none; }

.mfp-s-error .mfp-content {
  display: none; }

button.mfp-close,
button.mfp-arrow {
  overflow: visible;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  box-shadow: none;
  touch-action: manipulation; }

button::-moz-focus-inner {
  padding: 0;
  border: 0; }

.mfp-close {
  width: 44px;
  height: 44px;
  line-height: 44px;
  position: absolute;
  right: 0;
  top: 0;
  text-decoration: none;
  text-align: center;
  opacity: 0.65;
  padding: 0 0 18px 10px;
  color: #FFF;
  font-style: normal;
  font-size: 28px;
  font-family: Arial, Baskerville, monospace; }
  .mfp-close:hover,
  .mfp-close:focus {
    opacity: 1; }
  .mfp-close:active {
    top: 1px; }

.mfp-close-btn-in .mfp-close {
  color: #333; }

.mfp-image-holder .mfp-close,
.mfp-iframe-holder .mfp-close {
  color: #FFF;
  right: -6px;
  text-align: right;
  padding-right: 6px;
  width: 100%; }

.mfp-counter {
  position: absolute;
  top: 0;
  right: 0;
  color: #CCC;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap; }

.mfp-arrow {
  position: absolute;
  opacity: 0.65;
  margin: 0;
  top: 50%;
  margin-top: -55px;
  padding: 0;
  width: 90px;
  height: 110px;
  -webkit-tap-highlight-color: transparent; }
  .mfp-arrow:active {
    margin-top: -54px; }
  .mfp-arrow:hover,
  .mfp-arrow:focus {
    opacity: 1; }
  .mfp-arrow:before,
  .mfp-arrow:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 35px;
    margin-left: 35px;
    border: medium inset transparent; }
  .mfp-arrow:after {
    border-top-width: 13px;
    border-bottom-width: 13px;
    top: 8px; }
  .mfp-arrow:before {
    border-top-width: 21px;
    border-bottom-width: 21px;
    opacity: 0.7; }

.mfp-arrow-left {
  left: 0; }
  .mfp-arrow-left:after {
    border-right: 17px solid #FFF;
    margin-left: 31px; }
  .mfp-arrow-left:before {
    margin-left: 25px;
    border-right: 27px solid #3F3F3F; }

.mfp-arrow-right {
  right: 0; }
  .mfp-arrow-right:after {
    border-left: 17px solid #FFF;
    margin-left: 39px; }
  .mfp-arrow-right:before {
    border-left: 27px solid #3F3F3F; }

.mfp-iframe-holder {
  padding-top: 40px;
  padding-bottom: 40px; }
  .mfp-iframe-holder .mfp-content {
    line-height: 0;
    width: 100%;
    max-width: 900px; }
  .mfp-iframe-holder .mfp-close {
    top: -40px; }

.mfp-iframe-scaler {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%; }
  .mfp-iframe-scaler iframe {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    background: #000; }

/* Main image in popup */
img.mfp-img {
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 40px 0 40px;
  margin: 0 auto; }

/* The shadow behind the image */
.mfp-figure {
  line-height: 0; }
  .mfp-figure:after {
    content: '';
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 40px;
    display: block;
    right: 0;
    width: auto;
    height: auto;
    z-index: -1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    background: #444; }
  .mfp-figure small {
    color: #BDBDBD;
    display: block;
    font-size: 12px;
    line-height: 14px; }
  .mfp-figure figure {
    margin: 0; }

.mfp-bottom-bar {
  margin-top: -36px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: auto; }

.mfp-title {
  text-align: left;
  line-height: 18px;
  color: #F3F3F3;
  word-wrap: break-word;
  padding-right: 36px; }

.mfp-image-holder .mfp-content {
  max-width: 100%; }

.mfp-gallery .mfp-image-holder .mfp-figure {
  cursor: pointer; }

@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {
  /**
       * Remove all paddings around the image on small screen
       */
  .mfp-img-mobile .mfp-image-holder {
    padding-left: 0;
    padding-right: 0; }
  .mfp-img-mobile img.mfp-img {
    padding: 0; }
  .mfp-img-mobile .mfp-figure:after {
    top: 0;
    bottom: 0; }
  .mfp-img-mobile .mfp-figure small {
    display: inline;
    margin-left: 5px; }
  .mfp-img-mobile .mfp-bottom-bar {
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    margin: 0;
    top: auto;
    padding: 3px 5px;
    position: fixed;
    box-sizing: border-box; }
    .mfp-img-mobile .mfp-bottom-bar:empty {
      padding: 0; }
  .mfp-img-mobile .mfp-counter {
    right: 5px;
    top: 3px; }
  .mfp-img-mobile .mfp-close {
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    line-height: 35px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    text-align: center;
    padding: 0; } }

@media all and (max-width: 900px) {
  .mfp-arrow {
    -webkit-transform: scale(0.75);
    transform: scale(0.75); }
  .mfp-arrow-left {
    -webkit-transform-origin: 0;
    transform-origin: 0; }
  .mfp-arrow-right {
    -webkit-transform-origin: 100%;
    transform-origin: 100%; }
  .mfp-container {
    padding-left: 6px;
    padding-right: 6px; } }

@charset "UTF-8";

/*!
 * animate.css -http://daneden.me/animate
 * Version - 3.5.1
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2016 Daniel Eden
 */

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.flipOutX,
.animated.flipOutY,
.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes bounce {
  from, 20%, 53%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0,-4px,0);
    transform: translate3d(0,-4px,0);
  }
}

@keyframes bounce {
  from, 20%, 53%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0,-4px,0);
    transform: translate3d(0,-4px,0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

@-webkit-keyframes flash {
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@-webkit-keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.headShake {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
  from {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes wobble {
  from {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes jello {
  from, 11.1%, to {
    -webkit-transform: none;
    transform: none;
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

@keyframes jello {
  from, 11.1%, to {
    -webkit-transform: none;
    transform: none;
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

@-webkit-keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
}

@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }
}

.bounceOut {
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}

@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

@-webkit-keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

@keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

@keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.hinge {
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}

@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}

@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}

@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
}

@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
    transform: scale(.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
    transform: scale(.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

.zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
}

@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
    transform: scale(.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
    transform: scale(.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

.zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
}

@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
}

@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}

@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}

@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}

@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}

@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
.owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;cursor:hand;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animated{animation-duration:1s;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity .4s ease}.owl-carousel .owl-item img.owl-lazy{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;background:url(owl.video.play.png) no-repeat;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;transition:transform .1s ease}.owl-carousel .owl-video-play-icon:hover{-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity .4s ease}.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}
.slinky-menu {
  overflow: hidden;
  -webkit-transform: translateZ(0);
          transform: translateZ(0); }
  .slinky-menu > ul {
    left: 0;
    position: relative;
    -webkit-transform: translateZ(0);
            transform: translateZ(0); }
  .slinky-menu ul,
  .slinky-menu li {
    list-style: none;
    margin: 0; }
  .slinky-menu ul {
    width: 100%; }
  .slinky-menu a {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
    .slinky-menu a span {
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      line-height: 1.4; }
  .slinky-menu li ul {
    display: none;
    left: 100%;
    position: absolute;
    top: 0; }
  .slinky-menu .header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
    .slinky-menu .header .title {
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      line-height: 1.4;
      margin: 0;
      -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
              order: 1; }

.slinky-theme-default {
  background: #f6f7f8; }
  .slinky-theme-default .title {
    color: #333;
    padding: 1em; }
  .slinky-theme-default li {
    line-height: 1; }
  .slinky-theme-default a:not(.back) {
    color: #333;
    padding: 1em; }
    .slinky-theme-default a:not(.back):hover {
      background: rgba(90, 200, 250, 0.25); }
    .slinky-theme-default a:not(.back):active {
      background: rgba(90, 200, 250, 0.5); }
  .slinky-theme-default .next::after {
    margin-left: 1em; }
  .slinky-theme-default .back::before {
    padding: 1em;
    -webkit-transform: scaleX(-1);
            transform: scaleY(-1); }
  .slinky-theme-default .next:hover::after,
  .slinky-theme-default .back:hover::before {
    opacity: 0.75; }
  .slinky-theme-default .next:active::after,
  .slinky-theme-default .back:active::before {
    opacity: 1; }



.slinky-theme-default .next::after {
  background: rgba(0, 0, 0, 0) url("../../assets/img/icon-img/13.png") no-repeat scroll center center / 14px auto;
  content: "";
  height: 14px;
  opacity: 1;
  transition: all 200ms ease 0s;
  width: 14px;
}



.slinky-theme-default .back::before {
  background: rgba(0, 0, 0, 0) url("../../assets/img/icon-img/14.png") no-repeat scroll center center / 50px auto;
  content: "";
  height: 50px;
  opacity: 1;
  transition: all 200ms ease 0s;
  width: 50px;
}









/* Slider */
.slick-slider
{
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;

    display: block;
}
.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}

@charset "UTF-8";/*!
  Ionicons, v2.0.0
  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/
  https://twitter.com/benjsperry  https://twitter.com/ionicframework
  MIT License: https://github.com/driftyco/ionicons

  Android-style icons originally built by Google’s
  Material Design Icons: https://github.com/google/material-design-icons
  used under CC BY http://creativecommons.org/licenses/by/4.0/
  Modified icons to fit ionicon’s grid from original.
*/@font-face{font-family:"Ionicons";src:url("../fonts/ionicons.eot?v=2.0.0");src:url("../fonts/ionicons.eot?v=2.0.0#iefix") format("embedded-opentype"),url("../fonts/ionicons.ttf?v=2.0.0") format("truetype"),url("../fonts/ionicons.woff?v=2.0.0") format("woff"),url("../fonts/ionicons.svg?v=2.0.0#Ionicons") format("svg");font-weight:normal;font-style:normal}.ion,.ionicons,.ion-alert:before,.ion-alert-circled:before,.ion-android-add:before,.ion-android-add-circle:before,.ion-android-alarm-clock:before,.ion-android-alert:before,.ion-android-apps:before,.ion-android-archive:before,.ion-android-arrow-back:before,.ion-android-arrow-down:before,.ion-android-arrow-dropdown:before,.ion-android-arrow-dropdown-circle:before,.ion-android-arrow-dropleft:before,.ion-android-arrow-dropleft-circle:before,.ion-android-arrow-dropright:before,.ion-android-arrow-dropright-circle:before,.ion-android-arrow-dropup:before,.ion-android-arrow-dropup-circle:before,.ion-android-arrow-forward:before,.ion-android-arrow-up:before,.ion-android-attach:before,.ion-android-bar:before,.ion-android-bicycle:before,.ion-android-boat:before,.ion-android-bookmark:before,.ion-android-bulb:before,.ion-android-bus:before,.ion-android-calendar:before,.ion-android-call:before,.ion-android-camera:before,.ion-android-cancel:before,.ion-android-car:before,.ion-android-cart:before,.ion-android-chat:before,.ion-android-checkbox:before,.ion-android-checkbox-blank:before,.ion-android-checkbox-outline:before,.ion-android-checkbox-outline-blank:before,.ion-android-checkmark-circle:before,.ion-android-clipboard:before,.ion-android-close:before,.ion-android-cloud:before,.ion-android-cloud-circle:before,.ion-android-cloud-done:before,.ion-android-cloud-outline:before,.ion-android-color-palette:before,.ion-android-compass:before,.ion-android-contact:before,.ion-android-contacts:before,.ion-android-contract:before,.ion-android-create:before,.ion-android-delete:before,.ion-android-desktop:before,.ion-android-document:before,.ion-android-done:before,.ion-android-done-all:before,.ion-android-download:before,.ion-android-drafts:before,.ion-android-exit:before,.ion-android-expand:before,.ion-android-favorite:before,.ion-android-favorite-outline:before,.ion-android-film:before,.ion-android-folder:before,.ion-android-folder-open:before,.ion-android-funnel:before,.ion-android-globe:before,.ion-android-hand:before,.ion-android-hangout:before,.ion-android-happy:before,.ion-android-home:before,.ion-android-image:before,.ion-android-laptop:before,.ion-android-list:before,.ion-android-locate:before,.ion-android-lock:before,.ion-android-mail:before,.ion-android-map:before,.ion-android-menu:before,.ion-android-microphone:before,.ion-android-microphone-off:before,.ion-android-more-horizontal:before,.ion-android-more-vertical:before,.ion-android-navigate:before,.ion-android-notifications:before,.ion-android-notifications-none:before,.ion-android-notifications-off:before,.ion-android-open:before,.ion-android-options:before,.ion-android-people:before,.ion-android-person:before,.ion-android-person-add:before,.ion-android-phone-landscape:before,.ion-android-phone-portrait:before,.ion-android-pin:before,.ion-android-plane:before,.ion-android-playstore:before,.ion-android-print:before,.ion-android-radio-button-off:before,.ion-android-radio-button-on:before,.ion-android-refresh:before,.ion-android-remove:before,.ion-android-remove-circle:before,.ion-android-restaurant:before,.ion-android-sad:before,.ion-android-search:before,.ion-android-send:before,.ion-android-settings:before,.ion-android-share:before,.ion-android-share-alt:before,.ion-android-star:before,.ion-android-star-half:before,.ion-android-star-outline:before,.ion-android-stopwatch:before,.ion-android-subway:before,.ion-android-sunny:before,.ion-android-sync:before,.ion-android-textsms:before,.ion-android-time:before,.ion-android-train:before,.ion-android-unlock:before,.ion-android-upload:before,.ion-android-volume-down:before,.ion-android-volume-mute:before,.ion-android-volume-off:before,.ion-android-volume-up:before,.ion-android-walk:before,.ion-android-warning:before,.ion-android-watch:before,.ion-android-wifi:before,.ion-aperture:before,.ion-archive:before,.ion-arrow-down-a:before,.ion-arrow-down-b:before,.ion-arrow-down-c:before,.ion-arrow-expand:before,.ion-arrow-graph-down-left:before,.ion-arrow-graph-down-right:before,.ion-arrow-graph-up-left:before,.ion-arrow-graph-up-right:before,.ion-arrow-left-a:before,.ion-arrow-left-b:before,.ion-arrow-left-c:before,.ion-arrow-move:before,.ion-arrow-resize:before,.ion-arrow-return-left:before,.ion-arrow-return-right:before,.ion-arrow-right-a:before,.ion-arrow-right-b:before,.ion-arrow-right-c:before,.ion-arrow-shrink:before,.ion-arrow-swap:before,.ion-arrow-up-a:before,.ion-arrow-up-b:before,.ion-arrow-up-c:before,.ion-asterisk:before,.ion-at:before,.ion-backspace:before,.ion-backspace-outline:before,.ion-bag:before,.ion-battery-charging:before,.ion-battery-empty:before,.ion-battery-full:before,.ion-battery-half:before,.ion-battery-low:before,.ion-beaker:before,.ion-beer:before,.ion-bluetooth:before,.ion-bonfire:before,.ion-bookmark:before,.ion-bowtie:before,.ion-briefcase:before,.ion-bug:before,.ion-calculator:before,.ion-calendar:before,.ion-camera:before,.ion-card:before,.ion-cash:before,.ion-chatbox:before,.ion-chatbox-working:before,.ion-chatboxes:before,.ion-chatbubble:before,.ion-chatbubble-working:before,.ion-chatbubbles:before,.ion-checkmark:before,.ion-checkmark-circled:before,.ion-checkmark-round:before,.ion-chevron-down:before,.ion-chevron-left:before,.ion-chevron-right:before,.ion-chevron-up:before,.ion-clipboard:before,.ion-clock:before,.ion-close:before,.ion-close-circled:before,.ion-close-round:before,.ion-closed-captioning:before,.ion-cloud:before,.ion-code:before,.ion-code-download:before,.ion-code-working:before,.ion-coffee:before,.ion-compass:before,.ion-compose:before,.ion-connection-bars:before,.ion-contrast:before,.ion-crop:before,.ion-cube:before,.ion-disc:before,.ion-document:before,.ion-document-text:before,.ion-drag:before,.ion-earth:before,.ion-easel:before,.ion-edit:before,.ion-egg:before,.ion-eject:before,.ion-email:before,.ion-email-unread:before,.ion-erlenmeyer-flask:before,.ion-erlenmeyer-flask-bubbles:before,.ion-eye:before,.ion-eye-disabled:before,.ion-female:before,.ion-filing:before,.ion-film-marker:before,.ion-fireball:before,.ion-flag:before,.ion-flame:before,.ion-flash:before,.ion-flash-off:before,.ion-folder:before,.ion-fork:before,.ion-fork-repo:before,.ion-forward:before,.ion-funnel:before,.ion-gear-a:before,.ion-gear-b:before,.ion-grid:before,.ion-hammer:before,.ion-happy:before,.ion-happy-outline:before,.ion-headphone:before,.ion-heart:before,.ion-heart-broken:before,.ion-help:before,.ion-help-buoy:before,.ion-help-circled:before,.ion-home:before,.ion-icecream:before,.ion-image:before,.ion-images:before,.ion-information:before,.ion-information-circled:before,.ion-ionic:before,.ion-ios-alarm:before,.ion-ios-alarm-outline:before,.ion-ios-albums:before,.ion-ios-albums-outline:before,.ion-ios-americanfootball:before,.ion-ios-americanfootball-outline:before,.ion-ios-analytics:before,.ion-ios-analytics-outline:before,.ion-ios-arrow-back:before,.ion-ios-arrow-down:before,.ion-ios-arrow-forward:before,.ion-ios-arrow-left:before,.ion-ios-arrow-right:before,.ion-ios-arrow-thin-down:before,.ion-ios-arrow-thin-left:before,.ion-ios-arrow-thin-right:before,.ion-ios-arrow-thin-up:before,.ion-ios-arrow-up:before,.ion-ios-at:before,.ion-ios-at-outline:before,.ion-ios-barcode:before,.ion-ios-barcode-outline:before,.ion-ios-baseball:before,.ion-ios-baseball-outline:before,.ion-ios-basketball:before,.ion-ios-basketball-outline:before,.ion-ios-bell:before,.ion-ios-bell-outline:before,.ion-ios-body:before,.ion-ios-body-outline:before,.ion-ios-bolt:before,.ion-ios-bolt-outline:before,.ion-ios-book:before,.ion-ios-book-outline:before,.ion-ios-bookmarks:before,.ion-ios-bookmarks-outline:before,.ion-ios-box:before,.ion-ios-box-outline:before,.ion-ios-briefcase:before,.ion-ios-briefcase-outline:before,.ion-ios-browsers:before,.ion-ios-browsers-outline:before,.ion-ios-calculator:before,.ion-ios-calculator-outline:before,.ion-ios-calendar:before,.ion-ios-calendar-outline:before,.ion-ios-camera:before,.ion-ios-camera-outline:before,.ion-ios-cart:before,.ion-ios-cart-outline:before,.ion-ios-chatboxes:before,.ion-ios-chatboxes-outline:before,.ion-ios-chatbubble:before,.ion-ios-chatbubble-outline:before,.ion-ios-checkmark:before,.ion-ios-checkmark-empty:before,.ion-ios-checkmark-outline:before,.ion-ios-circle-filled:before,.ion-ios-circle-outline:before,.ion-ios-clock:before,.ion-ios-clock-outline:before,.ion-ios-close:before,.ion-ios-close-empty:before,.ion-ios-close-outline:before,.ion-ios-cloud:before,.ion-ios-cloud-download:before,.ion-ios-cloud-download-outline:before,.ion-ios-cloud-outline:before,.ion-ios-cloud-upload:before,.ion-ios-cloud-upload-outline:before,.ion-ios-cloudy:before,.ion-ios-cloudy-night:before,.ion-ios-cloudy-night-outline:before,.ion-ios-cloudy-outline:before,.ion-ios-cog:before,.ion-ios-cog-outline:before,.ion-ios-color-filter:before,.ion-ios-color-filter-outline:before,.ion-ios-color-wand:before,.ion-ios-color-wand-outline:before,.ion-ios-compose:before,.ion-ios-compose-outline:before,.ion-ios-contact:before,.ion-ios-contact-outline:before,.ion-ios-copy:before,.ion-ios-copy-outline:before,.ion-ios-crop:before,.ion-ios-crop-strong:before,.ion-ios-download:before,.ion-ios-download-outline:before,.ion-ios-drag:before,.ion-ios-email:before,.ion-ios-email-outline:before,.ion-ios-eye:before,.ion-ios-eye-outline:before,.ion-ios-fastforward:before,.ion-ios-fastforward-outline:before,.ion-ios-filing:before,.ion-ios-filing-outline:before,.ion-ios-film:before,.ion-ios-film-outline:before,.ion-ios-flag:before,.ion-ios-flag-outline:before,.ion-ios-flame:before,.ion-ios-flame-outline:before,.ion-ios-flask:before,.ion-ios-flask-outline:before,.ion-ios-flower:before,.ion-ios-flower-outline:before,.ion-ios-folder:before,.ion-ios-folder-outline:before,.ion-ios-football:before,.ion-ios-football-outline:before,.ion-ios-game-controller-a:before,.ion-ios-game-controller-a-outline:before,.ion-ios-game-controller-b:before,.ion-ios-game-controller-b-outline:before,.ion-ios-gear:before,.ion-ios-gear-outline:before,.ion-ios-glasses:before,.ion-ios-glasses-outline:before,.ion-ios-grid-view:before,.ion-ios-grid-view-outline:before,.ion-ios-heart:before,.ion-ios-heart-outline:before,.ion-ios-help:before,.ion-ios-help-empty:before,.ion-ios-help-outline:before,.ion-ios-home:before,.ion-ios-home-outline:before,.ion-ios-infinite:before,.ion-ios-infinite-outline:before,.ion-ios-information:before,.ion-ios-information-empty:before,.ion-ios-information-outline:before,.ion-ios-ionic-outline:before,.ion-ios-keypad:before,.ion-ios-keypad-outline:before,.ion-ios-lightbulb:before,.ion-ios-lightbulb-outline:before,.ion-ios-list:before,.ion-ios-list-outline:before,.ion-ios-location:before,.ion-ios-location-outline:before,.ion-ios-locked:before,.ion-ios-locked-outline:before,.ion-ios-loop:before,.ion-ios-loop-strong:before,.ion-ios-medical:before,.ion-ios-medical-outline:before,.ion-ios-medkit:before,.ion-ios-medkit-outline:before,.ion-ios-mic:before,.ion-ios-mic-off:before,.ion-ios-mic-outline:before,.ion-ios-minus:before,.ion-ios-minus-empty:before,.ion-ios-minus-outline:before,.ion-ios-monitor:before,.ion-ios-monitor-outline:before,.ion-ios-moon:before,.ion-ios-moon-outline:before,.ion-ios-more:before,.ion-ios-more-outline:before,.ion-ios-musical-note:before,.ion-ios-musical-notes:before,.ion-ios-navigate:before,.ion-ios-navigate-outline:before,.ion-ios-nutrition:before,.ion-ios-nutrition-outline:before,.ion-ios-paper:before,.ion-ios-paper-outline:before,.ion-ios-paperplane:before,.ion-ios-paperplane-outline:before,.ion-ios-partlysunny:before,.ion-ios-partlysunny-outline:before,.ion-ios-pause:before,.ion-ios-pause-outline:before,.ion-ios-paw:before,.ion-ios-paw-outline:before,.ion-ios-people:before,.ion-ios-people-outline:before,.ion-ios-person:before,.ion-ios-person-outline:before,.ion-ios-personadd:before,.ion-ios-personadd-outline:before,.ion-ios-photos:before,.ion-ios-photos-outline:before,.ion-ios-pie:before,.ion-ios-pie-outline:before,.ion-ios-pint:before,.ion-ios-pint-outline:before,.ion-ios-play:before,.ion-ios-play-outline:before,.ion-ios-plus:before,.ion-ios-plus-empty:before,.ion-ios-plus-outline:before,.ion-ios-pricetag:before,.ion-ios-pricetag-outline:before,.ion-ios-pricetags:before,.ion-ios-pricetags-outline:before,.ion-ios-printer:before,.ion-ios-printer-outline:before,.ion-ios-pulse:before,.ion-ios-pulse-strong:before,.ion-ios-rainy:before,.ion-ios-rainy-outline:before,.ion-ios-recording:before,.ion-ios-recording-outline:before,.ion-ios-redo:before,.ion-ios-redo-outline:before,.ion-ios-refresh:before,.ion-ios-refresh-empty:before,.ion-ios-refresh-outline:before,.ion-ios-reload:before,.ion-ios-reverse-camera:before,.ion-ios-reverse-camera-outline:before,.ion-ios-rewind:before,.ion-ios-rewind-outline:before,.ion-ios-rose:before,.ion-ios-rose-outline:before,.ion-ios-search:before,.ion-ios-search-strong:before,.ion-ios-settings:before,.ion-ios-settings-strong:before,.ion-ios-shuffle:before,.ion-ios-shuffle-strong:before,.ion-ios-skipbackward:before,.ion-ios-skipbackward-outline:before,.ion-ios-skipforward:before,.ion-ios-skipforward-outline:before,.ion-ios-snowy:before,.ion-ios-speedometer:before,.ion-ios-speedometer-outline:before,.ion-ios-star:before,.ion-ios-star-half:before,.ion-ios-star-outline:before,.ion-ios-stopwatch:before,.ion-ios-stopwatch-outline:before,.ion-ios-sunny:before,.ion-ios-sunny-outline:before,.ion-ios-telephone:before,.ion-ios-telephone-outline:before,.ion-ios-tennisball:before,.ion-ios-tennisball-outline:before,.ion-ios-thunderstorm:before,.ion-ios-thunderstorm-outline:before,.ion-ios-time:before,.ion-ios-time-outline:before,.ion-ios-timer:before,.ion-ios-timer-outline:before,.ion-ios-toggle:before,.ion-ios-toggle-outline:before,.ion-ios-trash:before,.ion-ios-trash-outline:before,.ion-ios-undo:before,.ion-ios-undo-outline:before,.ion-ios-unlocked:before,.ion-ios-unlocked-outline:before,.ion-ios-upload:before,.ion-ios-upload-outline:before,.ion-ios-videocam:before,.ion-ios-videocam-outline:before,.ion-ios-volume-high:before,.ion-ios-volume-low:before,.ion-ios-wineglass:before,.ion-ios-wineglass-outline:before,.ion-ios-world:before,.ion-ios-world-outline:before,.ion-ipad:before,.ion-iphone:before,.ion-ipod:before,.ion-jet:before,.ion-key:before,.ion-knife:before,.ion-laptop:before,.ion-leaf:before,.ion-levels:before,.ion-lightbulb:before,.ion-link:before,.ion-load-a:before,.ion-load-b:before,.ion-load-c:before,.ion-load-d:before,.ion-location:before,.ion-lock-combination:before,.ion-locked:before,.ion-log-in:before,.ion-log-out:before,.ion-loop:before,.ion-magnet:before,.ion-male:before,.ion-man:before,.ion-map:before,.ion-medkit:before,.ion-merge:before,.ion-mic-a:before,.ion-mic-b:before,.ion-mic-c:before,.ion-minus:before,.ion-minus-circled:before,.ion-minus-round:before,.ion-model-s:before,.ion-monitor:before,.ion-more:before,.ion-mouse:before,.ion-music-note:before,.ion-navicon:before,.ion-navicon-round:before,.ion-navigate:before,.ion-network:before,.ion-no-smoking:before,.ion-nuclear:before,.ion-outlet:before,.ion-paintbrush:before,.ion-paintbucket:before,.ion-paper-airplane:before,.ion-paperclip:before,.ion-pause:before,.ion-person:before,.ion-person-add:before,.ion-person-stalker:before,.ion-pie-graph:before,.ion-pin:before,.ion-pinpoint:before,.ion-pizza:before,.ion-plane:before,.ion-planet:before,.ion-play:before,.ion-playstation:before,.ion-plus:before,.ion-plus-circled:before,.ion-plus-round:before,.ion-podium:before,.ion-pound:before,.ion-power:before,.ion-pricetag:before,.ion-pricetags:before,.ion-printer:before,.ion-pull-request:before,.ion-qr-scanner:before,.ion-quote:before,.ion-radio-waves:before,.ion-record:before,.ion-refresh:before,.ion-reply:before,.ion-reply-all:before,.ion-ribbon-a:before,.ion-ribbon-b:before,.ion-sad:before,.ion-sad-outline:before,.ion-scissors:before,.ion-search:before,.ion-settings:before,.ion-share:before,.ion-shuffle:before,.ion-skip-backward:before,.ion-skip-forward:before,.ion-social-android:before,.ion-social-android-outline:before,.ion-social-angular:before,.ion-social-angular-outline:before,.ion-social-apple:before,.ion-social-apple-outline:before,.ion-social-bitcoin:before,.ion-social-bitcoin-outline:before,.ion-social-buffer:before,.ion-social-buffer-outline:before,.ion-social-chrome:before,.ion-social-chrome-outline:before,.ion-social-codepen:before,.ion-social-codepen-outline:before,.ion-social-css3:before,.ion-social-css3-outline:before,.ion-social-designernews:before,.ion-social-designernews-outline:before,.ion-social-dribbble:before,.ion-social-dribbble-outline:before,.ion-social-dropbox:before,.ion-social-dropbox-outline:before,.ion-social-euro:before,.ion-social-euro-outline:before,.ion-social-facebook:before,.ion-social-facebook-outline:before,.ion-social-foursquare:before,.ion-social-foursquare-outline:before,.ion-social-freebsd-devil:before,.ion-social-github:before,.ion-social-github-outline:before,.ion-social-google:before,.ion-social-google-outline:before,.ion-social-googleplus:before,.ion-social-googleplus-outline:before,.ion-social-hackernews:before,.ion-social-hackernews-outline:before,.ion-social-html5:before,.ion-social-html5-outline:before,.ion-social-instagram:before,.ion-social-instagram-outline:before,.ion-social-javascript:before,.ion-social-javascript-outline:before,.ion-social-linkedin:before,.ion-social-linkedin-outline:before,.ion-social-markdown:before,.ion-social-nodejs:before,.ion-social-octocat:before,.ion-social-pinterest:before,.ion-social-pinterest-outline:before,.ion-social-python:before,.ion-social-reddit:before,.ion-social-reddit-outline:before,.ion-social-rss:before,.ion-social-rss-outline:before,.ion-social-sass:before,.ion-social-skype:before,.ion-social-skype-outline:before,.ion-social-snapchat:before,.ion-social-snapchat-outline:before,.ion-social-tumblr:before,.ion-social-tumblr-outline:before,.ion-social-tux:before,.ion-social-twitch:before,.ion-social-twitch-outline:before,.ion-social-twitter:before,.ion-social-twitter-outline:before,.ion-social-usd:before,.ion-social-usd-outline:before,.ion-social-vimeo:before,.ion-social-vimeo-outline:before,.ion-social-whatsapp:before,.ion-social-whatsapp-outline:before,.ion-social-windows:before,.ion-social-windows-outline:before,.ion-social-wordpress:before,.ion-social-wordpress-outline:before,.ion-social-yahoo:before,.ion-social-yahoo-outline:before,.ion-social-yen:before,.ion-social-yen-outline:before,.ion-social-youtube:before,.ion-social-youtube-outline:before,.ion-soup-can:before,.ion-soup-can-outline:before,.ion-speakerphone:before,.ion-speedometer:before,.ion-spoon:before,.ion-star:before,.ion-stats-bars:before,.ion-steam:before,.ion-stop:before,.ion-thermometer:before,.ion-thumbsdown:before,.ion-thumbsup:before,.ion-toggle:before,.ion-toggle-filled:before,.ion-transgender:before,.ion-trash-a:before,.ion-trash-b:before,.ion-trophy:before,.ion-tshirt:before,.ion-tshirt-outline:before,.ion-umbrella:before,.ion-university:before,.ion-unlocked:before,.ion-upload:before,.ion-usb:before,.ion-videocamera:before,.ion-volume-high:before,.ion-volume-low:before,.ion-volume-medium:before,.ion-volume-mute:before,.ion-wand:before,.ion-waterdrop:before,.ion-wifi:before,.ion-wineglass:before,.ion-woman:before,.ion-wrench:before,.ion-xbox:before{display:inline-block;font-family:"Ionicons";speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;text-rendering:auto;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ion-alert:before{content:"\f101"}.ion-alert-circled:before{content:"\f100"}.ion-android-add:before{content:"\f2c7"}.ion-android-add-circle:before{content:"\f359"}.ion-android-alarm-clock:before{content:"\f35a"}.ion-android-alert:before{content:"\f35b"}.ion-android-apps:before{content:"\f35c"}.ion-android-archive:before{content:"\f2c9"}.ion-android-arrow-back:before{content:"\f2ca"}.ion-android-arrow-down:before{content:"\f35d"}.ion-android-arrow-dropdown:before{content:"\f35f"}.ion-android-arrow-dropdown-circle:before{content:"\f35e"}.ion-android-arrow-dropleft:before{content:"\f361"}.ion-android-arrow-dropleft-circle:before{content:"\f360"}.ion-android-arrow-dropright:before{content:"\f363"}.ion-android-arrow-dropright-circle:before{content:"\f362"}.ion-android-arrow-dropup:before{content:"\f365"}.ion-android-arrow-dropup-circle:before{content:"\f364"}.ion-android-arrow-forward:before{content:"\f30f"}.ion-android-arrow-up:before{content:"\f366"}.ion-android-attach:before{content:"\f367"}.ion-android-bar:before{content:"\f368"}.ion-android-bicycle:before{content:"\f369"}.ion-android-boat:before{content:"\f36a"}.ion-android-bookmark:before{content:"\f36b"}.ion-android-bulb:before{content:"\f36c"}.ion-android-bus:before{content:"\f36d"}.ion-android-calendar:before{content:"\f2d1"}.ion-android-call:before{content:"\f2d2"}.ion-android-camera:before{content:"\f2d3"}.ion-android-cancel:before{content:"\f36e"}.ion-android-car:before{content:"\f36f"}.ion-android-cart:before{content:"\f370"}.ion-android-chat:before{content:"\f2d4"}.ion-android-checkbox:before{content:"\f374"}.ion-android-checkbox-blank:before{content:"\f371"}.ion-android-checkbox-outline:before{content:"\f373"}.ion-android-checkbox-outline-blank:before{content:"\f372"}.ion-android-checkmark-circle:before{content:"\f375"}.ion-android-clipboard:before{content:"\f376"}.ion-android-close:before{content:"\f2d7"}.ion-android-cloud:before{content:"\f37a"}.ion-android-cloud-circle:before{content:"\f377"}.ion-android-cloud-done:before{content:"\f378"}.ion-android-cloud-outline:before{content:"\f379"}.ion-android-color-palette:before{content:"\f37b"}.ion-android-compass:before{content:"\f37c"}.ion-android-contact:before{content:"\f2d8"}.ion-android-contacts:before{content:"\f2d9"}.ion-android-contract:before{content:"\f37d"}.ion-android-create:before{content:"\f37e"}.ion-android-delete:before{content:"\f37f"}.ion-android-desktop:before{content:"\f380"}.ion-android-document:before{content:"\f381"}.ion-android-done:before{content:"\f383"}.ion-android-done-all:before{content:"\f382"}.ion-android-download:before{content:"\f2dd"}.ion-android-drafts:before{content:"\f384"}.ion-android-exit:before{content:"\f385"}.ion-android-expand:before{content:"\f386"}.ion-android-favorite:before{content:"\f388"}.ion-android-favorite-outline:before{content:"\f387"}.ion-android-film:before{content:"\f389"}.ion-android-folder:before{content:"\f2e0"}.ion-android-folder-open:before{content:"\f38a"}.ion-android-funnel:before{content:"\f38b"}.ion-android-globe:before{content:"\f38c"}.ion-android-hand:before{content:"\f2e3"}.ion-android-hangout:before{content:"\f38d"}.ion-android-happy:before{content:"\f38e"}.ion-android-home:before{content:"\f38f"}.ion-android-image:before{content:"\f2e4"}.ion-android-laptop:before{content:"\f390"}.ion-android-list:before{content:"\f391"}.ion-android-locate:before{content:"\f2e9"}.ion-android-lock:before{content:"\f392"}.ion-android-mail:before{content:"\f2eb"}.ion-android-map:before{content:"\f393"}.ion-android-menu:before{content:"\f394"}.ion-android-microphone:before{content:"\f2ec"}.ion-android-microphone-off:before{content:"\f395"}.ion-android-more-horizontal:before{content:"\f396"}.ion-android-more-vertical:before{content:"\f397"}.ion-android-navigate:before{content:"\f398"}.ion-android-notifications:before{content:"\f39b"}.ion-android-notifications-none:before{content:"\f399"}.ion-android-notifications-off:before{content:"\f39a"}.ion-android-open:before{content:"\f39c"}.ion-android-options:before{content:"\f39d"}.ion-android-people:before{content:"\f39e"}.ion-android-person:before{content:"\f3a0"}.ion-android-person-add:before{content:"\f39f"}.ion-android-phone-landscape:before{content:"\f3a1"}.ion-android-phone-portrait:before{content:"\f3a2"}.ion-android-pin:before{content:"\f3a3"}.ion-android-plane:before{content:"\f3a4"}.ion-android-playstore:before{content:"\f2f0"}.ion-android-print:before{content:"\f3a5"}.ion-android-radio-button-off:before{content:"\f3a6"}.ion-android-radio-button-on:before{content:"\f3a7"}.ion-android-refresh:before{content:"\f3a8"}.ion-android-remove:before{content:"\f2f4"}.ion-android-remove-circle:before{content:"\f3a9"}.ion-android-restaurant:before{content:"\f3aa"}.ion-android-sad:before{content:"\f3ab"}.ion-android-search:before{content:"\f2f5"}.ion-android-send:before{content:"\f2f6"}.ion-android-settings:before{content:"\f2f7"}.ion-android-share:before{content:"\f2f8"}.ion-android-share-alt:before{content:"\f3ac"}.ion-android-star:before{content:"\f2fc"}.ion-android-star-half:before{content:"\f3ad"}.ion-android-star-outline:before{content:"\f3ae"}.ion-android-stopwatch:before{content:"\f2fd"}.ion-android-subway:before{content:"\f3af"}.ion-android-sunny:before{content:"\f3b0"}.ion-android-sync:before{content:"\f3b1"}.ion-android-textsms:before{content:"\f3b2"}.ion-android-time:before{content:"\f3b3"}.ion-android-train:before{content:"\f3b4"}.ion-android-unlock:before{content:"\f3b5"}.ion-android-upload:before{content:"\f3b6"}.ion-android-volume-down:before{content:"\f3b7"}.ion-android-volume-mute:before{content:"\f3b8"}.ion-android-volume-off:before{content:"\f3b9"}.ion-android-volume-up:before{content:"\f3ba"}.ion-android-walk:before{content:"\f3bb"}.ion-android-warning:before{content:"\f3bc"}.ion-android-watch:before{content:"\f3bd"}.ion-android-wifi:before{content:"\f305"}.ion-aperture:before{content:"\f313"}.ion-archive:before{content:"\f102"}.ion-arrow-down-a:before{content:"\f103"}.ion-arrow-down-b:before{content:"\f104"}.ion-arrow-down-c:before{content:"\f105"}.ion-arrow-expand:before{content:"\f25e"}.ion-arrow-graph-down-left:before{content:"\f25f"}.ion-arrow-graph-down-right:before{content:"\f260"}.ion-arrow-graph-up-left:before{content:"\f261"}.ion-arrow-graph-up-right:before{content:"\f262"}.ion-arrow-left-a:before{content:"\f106"}.ion-arrow-left-b:before{content:"\f107"}.ion-arrow-left-c:before{content:"\f108"}.ion-arrow-move:before{content:"\f263"}.ion-arrow-resize:before{content:"\f264"}.ion-arrow-return-left:before{content:"\f265"}.ion-arrow-return-right:before{content:"\f266"}.ion-arrow-right-a:before{content:"\f109"}.ion-arrow-right-b:before{content:"\f10a"}.ion-arrow-right-c:before{content:"\f10b"}.ion-arrow-shrink:before{content:"\f267"}.ion-arrow-swap:before{content:"\f268"}.ion-arrow-up-a:before{content:"\f10c"}.ion-arrow-up-b:before{content:"\f10d"}.ion-arrow-up-c:before{content:"\f10e"}.ion-asterisk:before{content:"\f314"}.ion-at:before{content:"\f10f"}.ion-backspace:before{content:"\f3bf"}.ion-backspace-outline:before{content:"\f3be"}.ion-bag:before{content:"\f110"}.ion-battery-charging:before{content:"\f111"}.ion-battery-empty:before{content:"\f112"}.ion-battery-full:before{content:"\f113"}.ion-battery-half:before{content:"\f114"}.ion-battery-low:before{content:"\f115"}.ion-beaker:before{content:"\f269"}.ion-beer:before{content:"\f26a"}.ion-bluetooth:before{content:"\f116"}.ion-bonfire:before{content:"\f315"}.ion-bookmark:before{content:"\f26b"}.ion-bowtie:before{content:"\f3c0"}.ion-briefcase:before{content:"\f26c"}.ion-bug:before{content:"\f2be"}.ion-calculator:before{content:"\f26d"}.ion-calendar:before{content:"\f117"}.ion-camera:before{content:"\f118"}.ion-card:before{content:"\f119"}.ion-cash:before{content:"\f316"}.ion-chatbox:before{content:"\f11b"}.ion-chatbox-working:before{content:"\f11a"}.ion-chatboxes:before{content:"\f11c"}.ion-chatbubble:before{content:"\f11e"}.ion-chatbubble-working:before{content:"\f11d"}.ion-chatbubbles:before{content:"\f11f"}.ion-checkmark:before{content:"\f122"}.ion-checkmark-circled:before{content:"\f120"}.ion-checkmark-round:before{content:"\f121"}.ion-chevron-down:before{content:"\f123"}.ion-chevron-left:before{content:"\f124"}.ion-chevron-right:before{content:"\f125"}.ion-chevron-up:before{content:"\f126"}.ion-clipboard:before{content:"\f127"}.ion-clock:before{content:"\f26e"}.ion-close:before{content:"\f12a"}.ion-close-circled:before{content:"\f128"}.ion-close-round:before{content:"\f129"}.ion-closed-captioning:before{content:"\f317"}.ion-cloud:before{content:"\f12b"}.ion-code:before{content:"\f271"}.ion-code-download:before{content:"\f26f"}.ion-code-working:before{content:"\f270"}.ion-coffee:before{content:"\f272"}.ion-compass:before{content:"\f273"}.ion-compose:before{content:"\f12c"}.ion-connection-bars:before{content:"\f274"}.ion-contrast:before{content:"\f275"}.ion-crop:before{content:"\f3c1"}.ion-cube:before{content:"\f318"}.ion-disc:before{content:"\f12d"}.ion-document:before{content:"\f12f"}.ion-document-text:before{content:"\f12e"}.ion-drag:before{content:"\f130"}.ion-earth:before{content:"\f276"}.ion-easel:before{content:"\f3c2"}.ion-edit:before{content:"\f2bf"}.ion-egg:before{content:"\f277"}.ion-eject:before{content:"\f131"}.ion-email:before{content:"\f132"}.ion-email-unread:before{content:"\f3c3"}.ion-erlenmeyer-flask:before{content:"\f3c5"}.ion-erlenmeyer-flask-bubbles:before{content:"\f3c4"}.ion-eye:before{content:"\f133"}.ion-eye-disabled:before{content:"\f306"}.ion-female:before{content:"\f278"}.ion-filing:before{content:"\f134"}.ion-film-marker:before{content:"\f135"}.ion-fireball:before{content:"\f319"}.ion-flag:before{content:"\f279"}.ion-flame:before{content:"\f31a"}.ion-flash:before{content:"\f137"}.ion-flash-off:before{content:"\f136"}.ion-folder:before{content:"\f139"}.ion-fork:before{content:"\f27a"}.ion-fork-repo:before{content:"\f2c0"}.ion-forward:before{content:"\f13a"}.ion-funnel:before{content:"\f31b"}.ion-gear-a:before{content:"\f13d"}.ion-gear-b:before{content:"\f13e"}.ion-grid:before{content:"\f13f"}.ion-hammer:before{content:"\f27b"}.ion-happy:before{content:"\f31c"}.ion-happy-outline:before{content:"\f3c6"}.ion-headphone:before{content:"\f140"}.ion-heart:before{content:"\f141"}.ion-heart-broken:before{content:"\f31d"}.ion-help:before{content:"\f143"}.ion-help-buoy:before{content:"\f27c"}.ion-help-circled:before{content:"\f142"}.ion-home:before{content:"\f144"}.ion-icecream:before{content:"\f27d"}.ion-image:before{content:"\f147"}.ion-images:before{content:"\f148"}.ion-information:before{content:"\f14a"}.ion-information-circled:before{content:"\f149"}.ion-ionic:before{content:"\f14b"}.ion-ios-alarm:before{content:"\f3c8"}.ion-ios-alarm-outline:before{content:"\f3c7"}.ion-ios-albums:before{content:"\f3ca"}.ion-ios-albums-outline:before{content:"\f3c9"}.ion-ios-americanfootball:before{content:"\f3cc"}.ion-ios-americanfootball-outline:before{content:"\f3cb"}.ion-ios-analytics:before{content:"\f3ce"}.ion-ios-analytics-outline:before{content:"\f3cd"}.ion-ios-arrow-back:before{content:"\f3cf"}.ion-ios-arrow-down:before{content:"\f3d0"}.ion-ios-arrow-forward:before{content:"\f3d1"}.ion-ios-arrow-left:before{content:"\f3d2"}.ion-ios-arrow-right:before{content:"\f3d3"}.ion-ios-arrow-thin-down:before{content:"\f3d4"}.ion-ios-arrow-thin-left:before{content:"\f3d5"}.ion-ios-arrow-thin-right:before{content:"\f3d6"}.ion-ios-arrow-thin-up:before{content:"\f3d7"}.ion-ios-arrow-up:before{content:"\f3d8"}.ion-ios-at:before{content:"\f3da"}.ion-ios-at-outline:before{content:"\f3d9"}.ion-ios-barcode:before{content:"\f3dc"}.ion-ios-barcode-outline:before{content:"\f3db"}.ion-ios-baseball:before{content:"\f3de"}.ion-ios-baseball-outline:before{content:"\f3dd"}.ion-ios-basketball:before{content:"\f3e0"}.ion-ios-basketball-outline:before{content:"\f3df"}.ion-ios-bell:before{content:"\f3e2"}.ion-ios-bell-outline:before{content:"\f3e1"}.ion-ios-body:before{content:"\f3e4"}.ion-ios-body-outline:before{content:"\f3e3"}.ion-ios-bolt:before{content:"\f3e6"}.ion-ios-bolt-outline:before{content:"\f3e5"}.ion-ios-book:before{content:"\f3e8"}.ion-ios-book-outline:before{content:"\f3e7"}.ion-ios-bookmarks:before{content:"\f3ea"}.ion-ios-bookmarks-outline:before{content:"\f3e9"}.ion-ios-box:before{content:"\f3ec"}.ion-ios-box-outline:before{content:"\f3eb"}.ion-ios-briefcase:before{content:"\f3ee"}.ion-ios-briefcase-outline:before{content:"\f3ed"}.ion-ios-browsers:before{content:"\f3f0"}.ion-ios-browsers-outline:before{content:"\f3ef"}.ion-ios-calculator:before{content:"\f3f2"}.ion-ios-calculator-outline:before{content:"\f3f1"}.ion-ios-calendar:before{content:"\f3f4"}.ion-ios-calendar-outline:before{content:"\f3f3"}.ion-ios-camera:before{content:"\f3f6"}.ion-ios-camera-outline:before{content:"\f3f5"}.ion-ios-cart:before{content:"\f3f8"}.ion-ios-cart-outline:before{content:"\f3f7"}.ion-ios-chatboxes:before{content:"\f3fa"}.ion-ios-chatboxes-outline:before{content:"\f3f9"}.ion-ios-chatbubble:before{content:"\f3fc"}.ion-ios-chatbubble-outline:before{content:"\f3fb"}.ion-ios-checkmark:before{content:"\f3ff"}.ion-ios-checkmark-empty:before{content:"\f3fd"}.ion-ios-checkmark-outline:before{content:"\f3fe"}.ion-ios-circle-filled:before{content:"\f400"}.ion-ios-circle-outline:before{content:"\f401"}.ion-ios-clock:before{content:"\f403"}.ion-ios-clock-outline:before{content:"\f402"}.ion-ios-close:before{content:"\f406"}.ion-ios-close-empty:before{content:"\f404"}.ion-ios-close-outline:before{content:"\f405"}.ion-ios-cloud:before{content:"\f40c"}.ion-ios-cloud-download:before{content:"\f408"}.ion-ios-cloud-download-outline:before{content:"\f407"}.ion-ios-cloud-outline:before{content:"\f409"}.ion-ios-cloud-upload:before{content:"\f40b"}.ion-ios-cloud-upload-outline:before{content:"\f40a"}.ion-ios-cloudy:before{content:"\f410"}.ion-ios-cloudy-night:before{content:"\f40e"}.ion-ios-cloudy-night-outline:before{content:"\f40d"}.ion-ios-cloudy-outline:before{content:"\f40f"}.ion-ios-cog:before{content:"\f412"}.ion-ios-cog-outline:before{content:"\f411"}.ion-ios-color-filter:before{content:"\f414"}.ion-ios-color-filter-outline:before{content:"\f413"}.ion-ios-color-wand:before{content:"\f416"}.ion-ios-color-wand-outline:before{content:"\f415"}.ion-ios-compose:before{content:"\f418"}.ion-ios-compose-outline:before{content:"\f417"}.ion-ios-contact:before{content:"\f41a"}.ion-ios-contact-outline:before{content:"\f419"}.ion-ios-copy:before{content:"\f41c"}.ion-ios-copy-outline:before{content:"\f41b"}.ion-ios-crop:before{content:"\f41e"}.ion-ios-crop-strong:before{content:"\f41d"}.ion-ios-download:before{content:"\f420"}.ion-ios-download-outline:before{content:"\f41f"}.ion-ios-drag:before{content:"\f421"}.ion-ios-email:before{content:"\f423"}.ion-ios-email-outline:before{content:"\f422"}.ion-ios-eye:before{content:"\f425"}.ion-ios-eye-outline:before{content:"\f424"}.ion-ios-fastforward:before{content:"\f427"}.ion-ios-fastforward-outline:before{content:"\f426"}.ion-ios-filing:before{content:"\f429"}.ion-ios-filing-outline:before{content:"\f428"}.ion-ios-film:before{content:"\f42b"}.ion-ios-film-outline:before{content:"\f42a"}.ion-ios-flag:before{content:"\f42d"}.ion-ios-flag-outline:before{content:"\f42c"}.ion-ios-flame:before{content:"\f42f"}.ion-ios-flame-outline:before{content:"\f42e"}.ion-ios-flask:before{content:"\f431"}.ion-ios-flask-outline:before{content:"\f430"}.ion-ios-flower:before{content:"\f433"}.ion-ios-flower-outline:before{content:"\f432"}.ion-ios-folder:before{content:"\f435"}.ion-ios-folder-outline:before{content:"\f434"}.ion-ios-football:before{content:"\f437"}.ion-ios-football-outline:before{content:"\f436"}.ion-ios-game-controller-a:before{content:"\f439"}.ion-ios-game-controller-a-outline:before{content:"\f438"}.ion-ios-game-controller-b:before{content:"\f43b"}.ion-ios-game-controller-b-outline:before{content:"\f43a"}.ion-ios-gear:before{content:"\f43d"}.ion-ios-gear-outline:before{content:"\f43c"}.ion-ios-glasses:before{content:"\f43f"}.ion-ios-glasses-outline:before{content:"\f43e"}.ion-ios-grid-view:before{content:"\f441"}.ion-ios-grid-view-outline:before{content:"\f440"}.ion-ios-heart:before{content:"\f443"}.ion-ios-heart-outline:before{content:"\f442"}.ion-ios-help:before{content:"\f446"}.ion-ios-help-empty:before{content:"\f444"}.ion-ios-help-outline:before{content:"\f445"}.ion-ios-home:before{content:"\f448"}.ion-ios-home-outline:before{content:"\f447"}.ion-ios-infinite:before{content:"\f44a"}.ion-ios-infinite-outline:before{content:"\f449"}.ion-ios-information:before{content:"\f44d"}.ion-ios-information-empty:before{content:"\f44b"}.ion-ios-information-outline:before{content:"\f44c"}.ion-ios-ionic-outline:before{content:"\f44e"}.ion-ios-keypad:before{content:"\f450"}.ion-ios-keypad-outline:before{content:"\f44f"}.ion-ios-lightbulb:before{content:"\f452"}.ion-ios-lightbulb-outline:before{content:"\f451"}.ion-ios-list:before{content:"\f454"}.ion-ios-list-outline:before{content:"\f453"}.ion-ios-location:before{content:"\f456"}.ion-ios-location-outline:before{content:"\f455"}.ion-ios-locked:before{content:"\f458"}.ion-ios-locked-outline:before{content:"\f457"}.ion-ios-loop:before{content:"\f45a"}.ion-ios-loop-strong:before{content:"\f459"}.ion-ios-medical:before{content:"\f45c"}.ion-ios-medical-outline:before{content:"\f45b"}.ion-ios-medkit:before{content:"\f45e"}.ion-ios-medkit-outline:before{content:"\f45d"}.ion-ios-mic:before{content:"\f461"}.ion-ios-mic-off:before{content:"\f45f"}.ion-ios-mic-outline:before{content:"\f460"}.ion-ios-minus:before{content:"\f464"}.ion-ios-minus-empty:before{content:"\f462"}.ion-ios-minus-outline:before{content:"\f463"}.ion-ios-monitor:before{content:"\f466"}.ion-ios-monitor-outline:before{content:"\f465"}.ion-ios-moon:before{content:"\f468"}.ion-ios-moon-outline:before{content:"\f467"}.ion-ios-more:before{content:"\f46a"}.ion-ios-more-outline:before{content:"\f469"}.ion-ios-musical-note:before{content:"\f46b"}.ion-ios-musical-notes:before{content:"\f46c"}.ion-ios-navigate:before{content:"\f46e"}.ion-ios-navigate-outline:before{content:"\f46d"}.ion-ios-nutrition:before{content:"\f470"}.ion-ios-nutrition-outline:before{content:"\f46f"}.ion-ios-paper:before{content:"\f472"}.ion-ios-paper-outline:before{content:"\f471"}.ion-ios-paperplane:before{content:"\f474"}.ion-ios-paperplane-outline:before{content:"\f473"}.ion-ios-partlysunny:before{content:"\f476"}.ion-ios-partlysunny-outline:before{content:"\f475"}.ion-ios-pause:before{content:"\f478"}.ion-ios-pause-outline:before{content:"\f477"}.ion-ios-paw:before{content:"\f47a"}.ion-ios-paw-outline:before{content:"\f479"}.ion-ios-people:before{content:"\f47c"}.ion-ios-people-outline:before{content:"\f47b"}.ion-ios-person:before{content:"\f47e"}.ion-ios-person-outline:before{content:"\f47d"}.ion-ios-personadd:before{content:"\f480"}.ion-ios-personadd-outline:before{content:"\f47f"}.ion-ios-photos:before{content:"\f482"}.ion-ios-photos-outline:before{content:"\f481"}.ion-ios-pie:before{content:"\f484"}.ion-ios-pie-outline:before{content:"\f483"}.ion-ios-pint:before{content:"\f486"}.ion-ios-pint-outline:before{content:"\f485"}.ion-ios-play:before{content:"\f488"}.ion-ios-play-outline:before{content:"\f487"}.ion-ios-plus:before{content:"\f48b"}.ion-ios-plus-empty:before{content:"\f489"}.ion-ios-plus-outline:before{content:"\f48a"}.ion-ios-pricetag:before{content:"\f48d"}.ion-ios-pricetag-outline:before{content:"\f48c"}.ion-ios-pricetags:before{content:"\f48f"}.ion-ios-pricetags-outline:before{content:"\f48e"}.ion-ios-printer:before{content:"\f491"}.ion-ios-printer-outline:before{content:"\f490"}.ion-ios-pulse:before{content:"\f493"}.ion-ios-pulse-strong:before{content:"\f492"}.ion-ios-rainy:before{content:"\f495"}.ion-ios-rainy-outline:before{content:"\f494"}.ion-ios-recording:before{content:"\f497"}.ion-ios-recording-outline:before{content:"\f496"}.ion-ios-redo:before{content:"\f499"}.ion-ios-redo-outline:before{content:"\f498"}.ion-ios-refresh:before{content:"\f49c"}.ion-ios-refresh-empty:before{content:"\f49a"}.ion-ios-refresh-outline:before{content:"\f49b"}.ion-ios-reload:before{content:"\f49d"}.ion-ios-reverse-camera:before{content:"\f49f"}.ion-ios-reverse-camera-outline:before{content:"\f49e"}.ion-ios-rewind:before{content:"\f4a1"}.ion-ios-rewind-outline:before{content:"\f4a0"}.ion-ios-rose:before{content:"\f4a3"}.ion-ios-rose-outline:before{content:"\f4a2"}.ion-ios-search:before{content:"\f4a5"}.ion-ios-search-strong:before{content:"\f4a4"}.ion-ios-settings:before{content:"\f4a7"}.ion-ios-settings-strong:before{content:"\f4a6"}.ion-ios-shuffle:before{content:"\f4a9"}.ion-ios-shuffle-strong:before{content:"\f4a8"}.ion-ios-skipbackward:before{content:"\f4ab"}.ion-ios-skipbackward-outline:before{content:"\f4aa"}.ion-ios-skipforward:before{content:"\f4ad"}.ion-ios-skipforward-outline:before{content:"\f4ac"}.ion-ios-snowy:before{content:"\f4ae"}.ion-ios-speedometer:before{content:"\f4b0"}.ion-ios-speedometer-outline:before{content:"\f4af"}.ion-ios-star:before{content:"\f4b3"}.ion-ios-star-half:before{content:"\f4b1"}.ion-ios-star-outline:before{content:"\f4b2"}.ion-ios-stopwatch:before{content:"\f4b5"}.ion-ios-stopwatch-outline:before{content:"\f4b4"}.ion-ios-sunny:before{content:"\f4b7"}.ion-ios-sunny-outline:before{content:"\f4b6"}.ion-ios-telephone:before{content:"\f4b9"}.ion-ios-telephone-outline:before{content:"\f4b8"}.ion-ios-tennisball:before{content:"\f4bb"}.ion-ios-tennisball-outline:before{content:"\f4ba"}.ion-ios-thunderstorm:before{content:"\f4bd"}.ion-ios-thunderstorm-outline:before{content:"\f4bc"}.ion-ios-time:before{content:"\f4bf"}.ion-ios-time-outline:before{content:"\f4be"}.ion-ios-timer:before{content:"\f4c1"}.ion-ios-timer-outline:before{content:"\f4c0"}.ion-ios-toggle:before{content:"\f4c3"}.ion-ios-toggle-outline:before{content:"\f4c2"}.ion-ios-trash:before{content:"\f4c5"}.ion-ios-trash-outline:before{content:"\f4c4"}.ion-ios-undo:before{content:"\f4c7"}.ion-ios-undo-outline:before{content:"\f4c6"}.ion-ios-unlocked:before{content:"\f4c9"}.ion-ios-unlocked-outline:before{content:"\f4c8"}.ion-ios-upload:before{content:"\f4cb"}.ion-ios-upload-outline:before{content:"\f4ca"}.ion-ios-videocam:before{content:"\f4cd"}.ion-ios-videocam-outline:before{content:"\f4cc"}.ion-ios-volume-high:before{content:"\f4ce"}.ion-ios-volume-low:before{content:"\f4cf"}.ion-ios-wineglass:before{content:"\f4d1"}.ion-ios-wineglass-outline:before{content:"\f4d0"}.ion-ios-world:before{content:"\f4d3"}.ion-ios-world-outline:before{content:"\f4d2"}.ion-ipad:before{content:"\f1f9"}.ion-iphone:before{content:"\f1fa"}.ion-ipod:before{content:"\f1fb"}.ion-jet:before{content:"\f295"}.ion-key:before{content:"\f296"}.ion-knife:before{content:"\f297"}.ion-laptop:before{content:"\f1fc"}.ion-leaf:before{content:"\f1fd"}.ion-levels:before{content:"\f298"}.ion-lightbulb:before{content:"\f299"}.ion-link:before{content:"\f1fe"}.ion-load-a:before{content:"\f29a"}.ion-load-b:before{content:"\f29b"}.ion-load-c:before{content:"\f29c"}.ion-load-d:before{content:"\f29d"}.ion-location:before{content:"\f1ff"}.ion-lock-combination:before{content:"\f4d4"}.ion-locked:before{content:"\f200"}.ion-log-in:before{content:"\f29e"}.ion-log-out:before{content:"\f29f"}.ion-loop:before{content:"\f201"}.ion-magnet:before{content:"\f2a0"}.ion-male:before{content:"\f2a1"}.ion-man:before{content:"\f202"}.ion-map:before{content:"\f203"}.ion-medkit:before{content:"\f2a2"}.ion-merge:before{content:"\f33f"}.ion-mic-a:before{content:"\f204"}.ion-mic-b:before{content:"\f205"}.ion-mic-c:before{content:"\f206"}.ion-minus:before{content:"\f209"}.ion-minus-circled:before{content:"\f207"}.ion-minus-round:before{content:"\f208"}.ion-model-s:before{content:"\f2c1"}.ion-monitor:before{content:"\f20a"}.ion-more:before{content:"\f20b"}.ion-mouse:before{content:"\f340"}.ion-music-note:before{content:"\f20c"}.ion-navicon:before{content:"\f20e"}.ion-navicon-round:before{content:"\f20d"}.ion-navigate:before{content:"\f2a3"}.ion-network:before{content:"\f341"}.ion-no-smoking:before{content:"\f2c2"}.ion-nuclear:before{content:"\f2a4"}.ion-outlet:before{content:"\f342"}.ion-paintbrush:before{content:"\f4d5"}.ion-paintbucket:before{content:"\f4d6"}.ion-paper-airplane:before{content:"\f2c3"}.ion-paperclip:before{content:"\f20f"}.ion-pause:before{content:"\f210"}.ion-person:before{content:"\f213"}.ion-person-add:before{content:"\f211"}.ion-person-stalker:before{content:"\f212"}.ion-pie-graph:before{content:"\f2a5"}.ion-pin:before{content:"\f2a6"}.ion-pinpoint:before{content:"\f2a7"}.ion-pizza:before{content:"\f2a8"}.ion-plane:before{content:"\f214"}.ion-planet:before{content:"\f343"}.ion-play:before{content:"\f215"}.ion-playstation:before{content:"\f30a"}.ion-plus:before{content:"\f218"}.ion-plus-circled:before{content:"\f216"}.ion-plus-round:before{content:"\f217"}.ion-podium:before{content:"\f344"}.ion-pound:before{content:"\f219"}.ion-power:before{content:"\f2a9"}.ion-pricetag:before{content:"\f2aa"}.ion-pricetags:before{content:"\f2ab"}.ion-printer:before{content:"\f21a"}.ion-pull-request:before{content:"\f345"}.ion-qr-scanner:before{content:"\f346"}.ion-quote:before{content:"\f347"}.ion-radio-waves:before{content:"\f2ac"}.ion-record:before{content:"\f21b"}.ion-refresh:before{content:"\f21c"}.ion-reply:before{content:"\f21e"}.ion-reply-all:before{content:"\f21d"}.ion-ribbon-a:before{content:"\f348"}.ion-ribbon-b:before{content:"\f349"}.ion-sad:before{content:"\f34a"}.ion-sad-outline:before{content:"\f4d7"}.ion-scissors:before{content:"\f34b"}.ion-search:before{content:"\f21f"}.ion-settings:before{content:"\f2ad"}.ion-share:before{content:"\f220"}.ion-shuffle:before{content:"\f221"}.ion-skip-backward:before{content:"\f222"}.ion-skip-forward:before{content:"\f223"}.ion-social-android:before{content:"\f225"}.ion-social-android-outline:before{content:"\f224"}.ion-social-angular:before{content:"\f4d9"}.ion-social-angular-outline:before{content:"\f4d8"}.ion-social-apple:before{content:"\f227"}.ion-social-apple-outline:before{content:"\f226"}.ion-social-bitcoin:before{content:"\f2af"}.ion-social-bitcoin-outline:before{content:"\f2ae"}.ion-social-buffer:before{content:"\f229"}.ion-social-buffer-outline:before{content:"\f228"}.ion-social-chrome:before{content:"\f4db"}.ion-social-chrome-outline:before{content:"\f4da"}.ion-social-codepen:before{content:"\f4dd"}.ion-social-codepen-outline:before{content:"\f4dc"}.ion-social-css3:before{content:"\f4df"}.ion-social-css3-outline:before{content:"\f4de"}.ion-social-designernews:before{content:"\f22b"}.ion-social-designernews-outline:before{content:"\f22a"}.ion-social-dribbble:before{content:"\f22d"}.ion-social-dribbble-outline:before{content:"\f22c"}.ion-social-dropbox:before{content:"\f22f"}.ion-social-dropbox-outline:before{content:"\f22e"}.ion-social-euro:before{content:"\f4e1"}.ion-social-euro-outline:before{content:"\f4e0"}.ion-social-facebook:before{content:"\f231"}.ion-social-facebook-outline:before{content:"\f230"}.ion-social-foursquare:before{content:"\f34d"}.ion-social-foursquare-outline:before{content:"\f34c"}.ion-social-freebsd-devil:before{content:"\f2c4"}.ion-social-github:before{content:"\f233"}.ion-social-github-outline:before{content:"\f232"}.ion-social-google:before{content:"\f34f"}.ion-social-google-outline:before{content:"\f34e"}.ion-social-googleplus:before{content:"\f235"}.ion-social-googleplus-outline:before{content:"\f234"}.ion-social-hackernews:before{content:"\f237"}.ion-social-hackernews-outline:before{content:"\f236"}.ion-social-html5:before{content:"\f4e3"}.ion-social-html5-outline:before{content:"\f4e2"}.ion-social-instagram:before{content:"\f351"}.ion-social-instagram-outline:before{content:"\f350"}.ion-social-javascript:before{content:"\f4e5"}.ion-social-javascript-outline:before{content:"\f4e4"}.ion-social-linkedin:before{content:"\f239"}.ion-social-linkedin-outline:before{content:"\f238"}.ion-social-markdown:before{content:"\f4e6"}.ion-social-nodejs:before{content:"\f4e7"}.ion-social-octocat:before{content:"\f4e8"}.ion-social-pinterest:before{content:"\f2b1"}.ion-social-pinterest-outline:before{content:"\f2b0"}.ion-social-python:before{content:"\f4e9"}.ion-social-reddit:before{content:"\f23b"}.ion-social-reddit-outline:before{content:"\f23a"}.ion-social-rss:before{content:"\f23d"}.ion-social-rss-outline:before{content:"\f23c"}.ion-social-sass:before{content:"\f4ea"}.ion-social-skype:before{content:"\f23f"}.ion-social-skype-outline:before{content:"\f23e"}.ion-social-snapchat:before{content:"\f4ec"}.ion-social-snapchat-outline:before{content:"\f4eb"}.ion-social-tumblr:before{content:"\f241"}.ion-social-tumblr-outline:before{content:"\f240"}.ion-social-tux:before{content:"\f2c5"}.ion-social-twitch:before{content:"\f4ee"}.ion-social-twitch-outline:before{content:"\f4ed"}.ion-social-twitter:before{content:"\f243"}.ion-social-twitter-outline:before{content:"\f242"}.ion-social-usd:before{content:"\f353"}.ion-social-usd-outline:before{content:"\f352"}.ion-social-vimeo:before{content:"\f245"}.ion-social-vimeo-outline:before{content:"\f244"}.ion-social-whatsapp:before{content:"\f4f0"}.ion-social-whatsapp-outline:before{content:"\f4ef"}.ion-social-windows:before{content:"\f247"}.ion-social-windows-outline:before{content:"\f246"}.ion-social-wordpress:before{content:"\f249"}.ion-social-wordpress-outline:before{content:"\f248"}.ion-social-yahoo:before{content:"\f24b"}.ion-social-yahoo-outline:before{content:"\f24a"}.ion-social-yen:before{content:"\f4f2"}.ion-social-yen-outline:before{content:"\f4f1"}.ion-social-youtube:before{content:"\f24d"}.ion-social-youtube-outline:before{content:"\f24c"}.ion-soup-can:before{content:"\f4f4"}.ion-soup-can-outline:before{content:"\f4f3"}.ion-speakerphone:before{content:"\f2b2"}.ion-speedometer:before{content:"\f2b3"}.ion-spoon:before{content:"\f2b4"}.ion-star:before{content:"\f24e"}.ion-stats-bars:before{content:"\f2b5"}.ion-steam:before{content:"\f30b"}.ion-stop:before{content:"\f24f"}.ion-thermometer:before{content:"\f2b6"}.ion-thumbsdown:before{content:"\f250"}.ion-thumbsup:before{content:"\f251"}.ion-toggle:before{content:"\f355"}.ion-toggle-filled:before{content:"\f354"}.ion-transgender:before{content:"\f4f5"}.ion-trash-a:before{content:"\f252"}.ion-trash-b:before{content:"\f253"}.ion-trophy:before{content:"\f356"}.ion-tshirt:before{content:"\f4f7"}.ion-tshirt-outline:before{content:"\f4f6"}.ion-umbrella:before{content:"\f2b7"}.ion-university:before{content:"\f357"}.ion-unlocked:before{content:"\f254"}.ion-upload:before{content:"\f255"}.ion-usb:before{content:"\f2b8"}.ion-videocamera:before{content:"\f256"}.ion-volume-high:before{content:"\f257"}.ion-volume-low:before{content:"\f258"}.ion-volume-medium:before{content:"\f259"}.ion-volume-mute:before{content:"\f25a"}.ion-wand:before{content:"\f358"}.ion-waterdrop:before{content:"\f25b"}.ion-wifi:before{content:"\f25c"}.ion-wineglass:before{content:"\f2b9"}.ion-woman:before{content:"\f25d"}.ion-wrench:before{content:"\f2ba"}.ion-xbox:before{content:"\f30c"}

/*
    Template Name: Neha - Minimalist eCommerce HTML5 Template
    Description: This is html5 template
    Author: HasTech
    Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================
01. General
02. Page section margin padding 
03. Section title 1
04. Section title 2
05. button
06. button small
07. share button
08. Text color
09. Input
10. Extra class
11. Tool tip
12. loading
13. Box Layout
14. Back to top
15. Basic margin padding
 
======================================
[ End table content ]
======================================*/

/*************************
    General
*************************/
@import url('https://fonts.googleapis.com/css?family=Fredoka+One|Open+Sans:400,600,700,800|Pacifico|Playfair+Display:400,700,900');
body {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
	color:#686868;
}
.img{
    max-width: 100%;
    transition: all 0.3s ease-out 0s;
}
a,
.btn {
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
}
.btn {
    border-radius: 0px;
    font-size: 14px;
    padding: 0px 15px;
    height: 30px;
    line-height: 30px;
}
a:focus,
.btn:focus {
    text-decoration: none;
    outline: none;
}
a:focus, a:hover {
  color: #ee3333;
  text-decoration: none;
}
a,
button,
input {
    outline: medium none;
    color: #686868;
}
.uppercase { 
    text-transform: uppercase
}
.capitalize { 
    text-transform: capitalize
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    color: #3e3e3e;
    margin-top: 0px;
    font-style: normal;
    font-weight: 400;
}
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a { 
    color: inherit 
}
h1 {
    font-size: 46px;
    font-weight: 500;
}
h2 {
    font-size: 37px;
}
h3 {
    font-size: 28px;
}
h4 {
    font-size: 22px;
}
h5 {
    font-size: 18px;
}
h6 {
    font-size: 16px;
}
ul {
    margin: 0px;
    padding: 0px;
}
li { list-style: none }

p {
    font-size: 14px;
    font-weight: normal;
    line-height: 24px;
    color: #3e3e3e;
    margin-bottom: 15px;
    font-family: 'Open Sans', sans-serif;
}

hr{
    margin: 60px 0;
    padding: 0px;
    border-bottom: 1px solid #eceff8;
    border-top: 0px;
}
hr.style-2{
    border-bottom: 1px dashed #f10;
}
hr.mp-0 {
    margin: 0;
    border-bottom: 1px solid #eceff8;
}
hr.mtb-40 {
    margin: 40px 0;
    border-bottom: 1px solid #eceff8;
    border-top: 0px;
}
label {
    font-size: 15px;
    font-weight: 400;
    color: #626262;
}
*::-moz-selection {
    background: #4fc1f0;
    color: #fff;
    text-shadow: none;
}
::-moz-selection {
    background: #4fc1f0;
    color: #fff;
    text-shadow: none;
}
::selection {
    background: #4fc1f0;
    color: #fff;
    text-shadow: none;
}
.mark, mark {
    background: #4fc1f0 none repeat scroll 0 0;
    color: #ffffff;
}
span.tooltip-content {
  color: #00a9da;
  cursor: help;
  font-weight: 600;
}
.f-left {
    float: left
}
.f-right {
    float: right
}
.fix {
    overflow: hidden
}
.browserupgrade {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
}
/***************************
    transtion
****************************/
a.button::after,
a.button-small::after {
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
}
.share ul,
.share:hover ul {
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}
a.button-border span,
a.button-border-white span,
input,
select,
textarea {
    -webkit-transition: all 0.5s ease-out 0s;
    -moz-transition: all 0.5s ease-out 0s;
    -ms-transition: all 0.5s ease-out 0s;
    -o-transition: all 0.5s ease-out 0s;
    transition: all 0.5s ease-out 0s;
}

/*************************
    Section title 1
***********************/
.section-title{}
.section-title h3 {
  font-size: 36px;
  margin-bottom: 20px;
}
.section-title.text-white h3 {
  color: #ffffff;
}



/*************************
         button
*************************/
.button {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #9c9c9c;
  border-radius: 5px;
  box-shadow: none;
  color: #9c9c9c;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  overflow: hidden;
  padding: 12px 30px;
  position: relative;
  text-transform: uppercase;
}
.button:hover{border:1px solid #fff;color:#fff}
.button.border-white{border-color:#fff;}
.button.theme-bg {
  border-color: #4a90e2;
}
.button.button-white {
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03) inset;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    overflow: hidden;
    padding: 0;
    position: relative;
    background-color: #fff;
    color: #4FC1F0;
    font-size: 15px;
}
.button.button-white i {
    background: rgba(0, 0, 0, 0.09);
    display: block;
    float: left;
    padding: 14px;
    font-size: 16px;
    color: #4FC1F0;
    font-weight: normal;
    width: 50px;
    text-align: center;
}
.button.button-white span {
    display: block;
    float: left;
    position: relative;
    z-index: 2;
    padding: 11px 20px;
    font-size: 15px;
    color: #4FC1F0;
    font-weight: normal;
}
.button.button-grey {
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03) inset;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    overflow: hidden;
    padding: 0;
    position: relative;
    background-color: #eceff7;
    color: #4FC1F0;
    font-size: 15px;
}
.button.button-grey i {
    background: rgba(0, 0, 0, 0.09);
    display: block;
    float: left;
    padding: 14px;
    font-size: 16px;
    color: #4FC1F0;
    font-weight: normal;
    width: 50px;
    text-align: center;
}
.button.button-grey span {
    display: block;
    float: left;
    position: relative;
    z-index: 2;
    padding: 11px 20px;
    font-size: 15px;
    color: #4FC1F0;
    font-weight: normal;
}
.button.button-black {
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03) inset;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    overflow: hidden;
    padding: 0;
    position: relative;
    background-color: #444444;
    color: #4FC1F0;
    font-size: 15px;
}
.button.button-black i {
    background: rgba(0, 0, 0, 0.3);
    display: block;
    float: left;
    padding: 14px;
    font-size: 16px;
    color: #fff;
    font-weight: normal;
    width: 50px;
    text-align: center;
}
.button.button-black span {
    display: block;
    float: left;
    position: relative;
    z-index: 2;
    padding: 11px 20px;
    font-size: 15px;
    color: #fff;
    font-weight: normal;
}
.button-border span {
    border: 0 none;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    padding: 11px 20px;
    margin-right: 10px;
    overflow: hidden;
    position: relative;
    background-color: transparent;
    color: #4FC1F0;
    font-size: 15px;
    border: 1px solid #4FC1F0;
}
.button-border span:hover {
    box-shadow: -200px 0 0 #4FC1F0 inset;
    color: #fff;
    border-color: #4FC1F0;
}
.button-border-white span {
    border: 0 none;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    padding: 11px 20px;
    margin-right: 10px;
    overflow: hidden;
    position: relative;
    background-color: transparent;
    color: #fff;
    font-size: 15px;
    border: 1px solid #fff;
}
.button-border-white span:hover {
    box-shadow: -200px 0 0 #fff inset;
    color: #4FC1F0;
    border-color: #fff;
}


/*************************
        button small
*************************/
.button-small {
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03) inset;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    overflow: hidden;
    padding: 0;
    position: relative;
    background-color: #4FC1F0;
    color: #fff;
    font-size: 15px;
}
.button-small i {
    background: rgba(0, 0, 0, 0.09);
    display: block;
    float: left;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    font-weight: normal;
    width: 40px;
    text-align: center;
}
.button-small span {
    display: block;
    float: left;
    position: relative;
    z-index: 2;
    padding: 8px 10px;
    font-size: 13px;
    color: #fff;
    font-weight: normal;
}
.button-small:after {
    background: rgba(0, 0, 0, 0.09) none repeat scroll 0 0;
    content: "";
    height: 100%;
    right: 0;
    position: absolute;
    top: 0;
    width: 0;
    z-index: 1;
}
a.button-small:hover::after { width: 100% }

/*************************
        buttons variation
*************************/
.button.large {margin-right: 0px; }
.button.large span { padding: 16px 80px; font-size: 18px;  }
.button.large i { padding: 20px; width: 60px; font-size: 18px; }
.button.medium span { padding: 14px 60px; font-size: 16px; }
.button.medium i { padding: 17px; width: 50px; font-size: 16px; }
.button.small span { padding: 12px 40px; }
.button.small i { padding: 14px; width: 45px; }
.button.small span { padding: 12px 40px; }
.button.small i { padding: 15px; width: 45px; }
.button.extra-small span { padding: 8px 20px; font-size: 13px; }
.button.extra-small i { padding: 11px; width: 38px; font-size: 13px; }

/*************************
       social-icon
*************************/
.social-icon ul { margin: 0; padding: 0; }
.social-icon ul li { display: inline-block; list-style: none; }
.social-icon ul li a { display: block; margin: 3px; width: 50px; height: 50px; line-height: 50px; font-size: 16px; color: #fff; background: #4FC1F0; text-align: center; border-radius: 50%; }
.social-icon ul li a:hover { background: #EB3B60; }

.social-icon.socile-icon-style-2 ul li a { color: #fff; background: #323232; border-radius: 0;}
.social-icon.socile-icon-style-2 ul li a:hover { background: #EB3B60;  }

.social-icon.socile-icon-style-3 ul li a { color: #fff; background: transparent; border:1px solid #fff; }
.social-icon.socile-icon-style-3 ul li a:hover { background: #EB3B60; border-color:#EB3B60; }


/*************************
        Text color
*************************/
.text-blue { color: #4FC1F0; }
.text-white { color: #fff ;}
.text-black { color: #363636; }
.text-theme { color: #f10; }
.text-theme {
  color: #4a90e2;
}

.text-white h1, .text-white p, .text-white h2{ color: #fff; }
/*************************
        Input
*************************/
input {
    background: #eceff8;
    border: 2px solid #eceff8;
    height: 45px;
    box-shadow: none;
    padding-left: 10px;
    font-size: 14px;
    color: #626262;
    width: 100%;
}
select {
    width: 100%;
    background: #eceff8;
    border: 2px solid #eceff8;
    height: 45px;
    padding-left: 10px;
    box-shadow: none;
    font-size: 14px;
    color: #626262;
}
option {
    background: #fff;
    border: 0px solid #626262;
    padding-left: 10px;
    font-size: 14px;
}
input:focus {
    background: transparent;
    border: 2px solid #4FC1F0;
}
textarea {
    resize: vertical;
    background: #eceff8;
    border: 2px solid #eceff8;
    padding: 10px;
    width: 100%;
    font-size: 14px;
}
textarea:focus {
    background: transparent;
    border: 2px solid #4FC1F0;
    outline: none;
}
::-moz-placeholder {
    color: #444;
}
.input-group.divcenter.input-group .form-control { padding-left: 0px }
/*************************
        back-to-top
*************************/
#back-to-top .top {
    z-index: 999;
    position: fixed;
    margin: 0px;
    color: #fff;
    transition: all .5s ease-in-out;
    position: fixed;
    bottom: 105px;
    right: 15px;
    border-radius: 3px;
    z-index: 999;
    background: transparent;
    font-size: 14px;
    background: #4FC1F0;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 38px;
}
#back-to-top .top:hover {
    color: #fff;
    height: 50px;
}
#back-to-top .top { background: #007da1; }
/*************************
  Basic margin padding
*************************/
.m-0 {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
}
.p-0 {
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
}
/*************************
         Margin top
*************************/
.mt-0 { margin-top: 0 }
.mt-10 { margin-top: 10px }
.mt-12 { margin-top: 12px }
.mt-15 { margin-top: 15px }
.mt-20 { margin-top: 20px }
.mt-30 { margin-top: 30px }
.mt-40 { margin-top: 40px }
.mt-50 { margin-top: 50px }
.mt-60 { margin-top: 60px }
.mt-70 { margin-top: 70px }
.mt-80 { margin-top: 80px }
.mt-90 { margin-top: 90px }
.mt-100 { margin-top: 100px }
.mt-110 { margin-top: 110px }
.mt-120 { margin-top: 120px }
.mt-130 { margin-top: 130px }
.mt-140 { margin-top: 140px }
.mt-150 { margin-top: 150px }
/*************************
      Margin right
*************************/
.mr-0 { margin-right: 0px }
.mr-10 { margin-right: 10px }
.mr-12 { margin-right: 12px }
.mr-15 { margin-right: 15px }
.mr-20 { margin-right: 20px }
.mr-30 { margin-right: 30px }
.mr-35 { margin-right: 35px }
.mr-40 { margin-right: 40px }
.mr-50 { margin-right: 50px }
.mr-60 { margin-right: 60px }
.mr-70 { margin-right: 70px }
.mr-80 { margin-right: 80px }
.mr-90 { margin-right: 90px }
.mr-100 { margin-right: 100px }
.mr-110 { margin-right: 110px }
.mr-120 { margin-right: 120px }
.mr-130 { margin-right: 130px }
.mr-140 { margin-right: 140px }
.mr-150 { margin-right: 150px }
/*************************
      Margin bottom
*************************/
.mb-0 { margin-bottom: 0 }
.mb-10 { margin-bottom: 10px }
.mb-12 { margin-bottom: 12px }
.mb-15 { margin-bottom: 15px }
.mb-20 { margin-bottom: 20px }
.mb-30 { margin-bottom: 30px }
.mb-35 { margin-bottom: 35px }
.mb-40 { margin-bottom: 40px }
.mb-45 { margin-bottom: 45px }
.mb-50 { margin-bottom: 50px }
.mb-55 { margin-bottom: 55px }
.mb-60 { margin-bottom: 60px }
.mb-65 { margin-bottom: 65px }
.mb-70 { margin-bottom: 70px }
.mb-80 { margin-bottom: 80px }
.mb-90 { margin-bottom: 90px }
.mb-100 { margin-bottom: 100px }
.mb-110 { margin-bottom: 110px }
.mb-120 { margin-bottom: 120px }
.mb-130 { margin-bottom: 130px }
.mb-140 { margin-bottom: 140px }
.mb-150 { margin-bottom: 150px }
/*************************
        Margin left
*************************/
.ml-0 { margin-left: 0 }
.ml-10 { margin-left: 10px }
.ml-12 { margin-left: 12px }
.ml-15 { margin-left: 15px }
.ml-20 { margin-left: 20px }
.ml-30 { margin-left: 30px }
.ml-40 { margin-left: 40px }
.ml-50 { margin-left: 50px }
.ml-60 { margin-left: 60px }
.ml-70 { margin-left: 70px }
.ml-80 { margin-left: 80px }
.ml-90 { margin-left: 90px }
.ml-100 { margin-left: 100px }
.ml-110 { margin-left: 110px }
.ml-120 { margin-left: 120px }
.ml-130 { margin-left: 130px }
.ml-140 { margin-left: 140px }
.ml-150 { margin-left: 150px }
/*************************
        Padding top
*************************/
.pt-0 { padding-top: 0 }
.pt-10 { padding-top: 10px }
.pt-15 { padding-top: 15px }
.pt-20 { padding-top: 20px }
.pt-30 { padding-top: 30px }
.pt-40 { padding-top: 40px }
.pt-50 { padding-top: 50px }
.pt-55 { padding-top: 55px }
.pt-60 { padding-top: 60px }
.pt-65 { padding-top: 65px }
.pt-70 { padding-top: 70px }
.pt-75 { padding-top: 75px }
.pt-80 { padding-top: 80px }
.pt-95 { padding-top: 95px }
.pt-90 { padding-top: 90px }
.pt-100 { padding-top: 100px }
.pt-95 { padding-top: 95px }
.pt-105 { padding-top: 105px }
.pt-110 { padding-top: 110px }
.pt-120 { padding-top: 120px }
.pt-130 { padding-top: 130px }
.pt-135 { padding-top: 135px }
.pt-140 { padding-top: 140px }
.pt-150 { padding-top: 150px }
.pt-155 { padding-top: 155px }
.pt-205 { padding-top: 205px }
.pt-325 { padding-top: 325px }
.pt-330 { padding-top: 330px }
.pt-365 { padding-top: 365px }
.pt-370 { padding-top: 370px }   
.pt-375 { padding-top: 375px }   
.pt-380 { padding-top: 380px }
/*************************
        Padding right
*************************/
.pr-0 { padding-right: 0 }
.pr-10 { padding-right: 10px }
.pr-15 { padding-right: 15px }
.pr-20 { padding-right: 20px }
.pr-30 { padding-right: 30px }
.pr-40 { padding-right: 40px }
.pr-50 { padding-right: 50px }
.pr-60 { padding-right: 60px }
.pr-70 { padding-right: 70px }
.pr-80 { padding-right: 80px }
.pr-90 { padding-right: 90px }
.pr-100 { padding-right: 100px }
.pr-110 { padding-right: 110px }
.pr-120 { padding-right: 120px }
.pr-130 { padding-right: 130px }
.pr-140 { padding-right: 140px }
.pr-155 { padding-right: 155px }
/*************************
        Padding bottom
*************************/
.pb-0 { padding-bottom: 0 }
.pb-10 { padding-bottom: 10px }
.pb-15 { padding-bottom: 15px }
.pb-20 { padding-bottom: 20px }
.pb-30 { padding-bottom: 30px }
.pb-40 { padding-bottom: 40px }
.pb-45 { padding-bottom: 45px }
.pb-50 { padding-bottom: 50px }
.pb-60 { padding-bottom: 60px }
.pb-65 { padding-bottom: 65px }
.pb-70 { padding-bottom: 70px }
.pb-80 { padding-bottom: 80px }
.pb-85 { padding-bottom: 85px }
.pb-90 { padding-bottom: 90px }
.pb-95 { padding-bottom: 95px }
.pb-100 { padding-bottom: 100px }
.pb-105 { padding-bottom: 105px }
.pb-110 { padding-bottom: 110px }
.pb-115 { padding-bottom: 115px }
.pb-120 { padding-bottom: 120px }
.pb-125 { padding-bottom: 125px }
.pb-130 { padding-bottom: 130px }
.pb-140 { padding-bottom: 140px }
.pb-145 { padding-bottom: 145px }
.pb-150 { padding-bottom: 150px }
.pb-180 { padding-bottom: 180px }
.pb-280 { padding-bottom: 280px }
.pb-210 { padding-bottom: 210px }
.pb-285 { padding-bottom: 285px }
.pb-290 { padding-bottom: 290px }
.pb-320 { padding-bottom: 320px }
.pb-315 { padding-bottom: 315px }
/*************************
        Padding left
*************************/
.pl-0 { padding-left: 0 }
.pl-10 { padding-left: 10px }
.pl-15 { padding-left: 15px }
.pl-20 { padding-left: 20px }
.pl-30 { padding-left: 30px }
.pl-40 { padding-left: 40px }
.pl-50 { padding-left: 50px }
.pl-60 { padding-left: 60px }
.pl-70 { padding-left: 70px }
.pl-80 { padding-left: 80px }
.pl-90 { padding-left: 90px }
.pl-100 { padding-left: 100px }
.pl-110 { padding-left: 110px }
.pl-120 { padding-left: 120px }
.pl-130 { padding-left: 130px }
.pl-140 { padding-left: 140px }
.pl-150 { padding-left: 150px }
.pl-155 { padding-left: 155px }
.pl-190 { padding-left: 190px }


/***************************
    Page section padding 
****************************/
.ptb-0 { padding: 0 }
.ptb-10 { padding: 10px 0 }
.ptb-20 { padding: 20px 0 }
.ptb-30 { padding: 30px 0 }
.ptb-32 { padding: 32px 0 }
.ptb-40 { padding: 40px 0 }
.ptb-50 { padding: 50px 0 }
.ptb-60 { padding: 60px 0 }
.ptb-70 { padding: 70px 0 }
.ptb-80 { padding: 80px 0 }
.ptb-90 { padding: 90px 0 }
.ptb-100 { padding: 100px 0 }
.ptb-110 { padding: 110px 0 }
.ptb-120 { padding: 120px 0 }
.ptb-130 { padding: 130px 0 }
.ptb-140 { padding: 140px 0 }
.ptb-150 { padding: 150px 0 }
.ptb-160 { padding: 160px 0 }
.ptb-170 { padding: 170px 0 }
.ptb-177 { padding: 177px 0 }
.ptb-180 { padding: 180px 0 }
.ptb-190 { padding: 190px 0 }
.ptb-200 { padding: 200px 0 }
.ptb-210 { padding: 210px 0 }
.ptb-220 { padding: 220px 0 }
.ptb-260 { padding: 260px 0 }
.ptb-280 { padding: 280px 0 }
.ptb-290 { padding: 290px 0 }
.ptb-330 { padding: 330px 0 }
.ptb-320 { padding: 320px 0 }
.ptb-310 { padding: 310px 0 }
.ptb-315 { padding: 315px 0 }

/***************************
    Page section margin 
****************************/
.mtb-0 { margin: 0 }
.mtb-10 { margin: 10px 0 }
.mtb-15 { margin: 15px 0 }
.mtb-20 { margin: 20px 0 }
.mtb-30 { margin: 30px 0 }
.mtb-40 { margin: 40px 0 }
.mtb-50 { margin: 50px 0 }
.mtb-60 { margin: 60px 0 }
.mtb-70 { margin: 70px 0 }
.mtb-80 { margin: 80px 0 }
.mtb-90 { margin: 90px 0 }
.mtb-100 { margin: 100px 0 }
.mtb-110 { margin: 110px 0 }
.mtb-120 { margin: 120px 0 }
.mtb-130 { margin: 130px 0 }
.mtb-140 { margin: 140px 0 }
.mtb-150 { margin: 150px 0; }
.mtb-290 { margin: 290px 0; }

/*************************
        Extra class
*************************/
.pricing .container .row [class*="col-"] { }



/*Custom cloumn*/

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10 {
    float: left;
}
.col-1{
    width: 10%;
}
.col-2{
    width: 20%;
}
.col-3{
    width: 30%;
}
.col-4{
    width: 40%;
}
.col-5{
    width: 50%;
}
.col-6{
    width: 60%;
}
.col-7{
    width: 70%;
}
.col-8{
    width: 80%;
}
.col-9{
    width: 90%;
}
.col-10{
    width: 100%;
}
 /*************************************
    Background variation set 
 **************************************/
/*colored background*/
 .white-bg { background: #fff; }
 .black-bg { background: #252525 }
 .gray-bg { background: #f5f5f5; }
 .gray-bg-2 { background: #f1f1f1; }
 .gray-bg-3 { background: #e5e9ea; }
 .gray-bg-4 { background: #f4f4f4; }
 .gray-bg-5 { background: #f0f0f0; }
 .gray-bg-6 { background: #f3f3f3; }
 .theme-bg { background: #2a68fc;}
 .blue-bg { background: #4FC1F0; }
 .default-bg { background: #50C1F0; }
 .transparent-bg { background: transparent; }

/*Opacity background*/
/* black overlay */
[data-overlay] {
  position: relative;
} 
[data-overlay]::before {
  background: #252525 none repeat scroll 0 0;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
[data-overlay="3"]::before {
  opacity: 0.3;
}
[data-overlay="4"]::before {
  opacity: 0.4;
}
[data-overlay="5"]::before {
  opacity: 0.5;
}
[data-overlay="56"]::before {
  opacity: 0.56;
}
[data-overlay="6"]::before {
  opacity: 0.6;
}
[data-overlay="7"]::before {
  opacity: 0.7;
}
[data-overlay="8"]::before {
  opacity: 0.8;
}
/* white overlay */
[white-overlay] {
  position: relative;
} 
[white-overlay]::before {
  background: #fff none repeat scroll 0 0;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
[white-overlay="3"]::before {
  opacity: 0.3;
}
[white-overlay="4"]::before {
  opacity: 0.4;
}
[white-overlay="5"]::before {
  opacity: 0.3;
}
[white-overlay="6"]::before {
  opacity: 0.6;
}
[white-overlay="7"]::before {
  opacity: 0.8;
}
[white-overlay="9"]::before {
  opacity: 0.9;
}
.z-index{position:relative;z-index:9}

/*image background*/
 .bg-1, .bg-2, .bg-3, .bg-4, .bg-5, .bg-6, .bg-7, .bg-8, .bg-9, .bg-10{
    background-attachment: fixed; background-clip: initial; background-color: rgba(0, 0, 0, 0); background-origin: initial; background-position: center center; background-repeat: no-repeat; background-size: cover; position: relative; z-index: 0;
 }
 .bg-1 {
  background: url(../../images/bg/1.jpg);}
 .bg-2 { background: url(../../images/bg/2.jpg);}
 .bg-3 { background: url(../../images/bg/3.jpg);}
 .bg-4 { background: url(../../images/bg/4.jpg);}
 .bg-5 { background: url(../../images/bg/5.jpg);}
 .bg-6 { background: url(../../images/bg/6.jpg);}
 .bg-7 { background: url(../../images/bg/7.jpg);}
 .bg-8 { background: url(../../images/bg/8.jpg);}
 .bg-9 { background: url(../../images/bg/9.jpg);}
 .bg-10 { background: url(../../images/bg/10.jpg);}

.bg-img {
  background-position: center center;
  background-size: cover;
}
  /*pattern background*/
.pattern-bg { background:url(../../images/pattern/pattern-bg.png) repeat; background-position: top right; background-color: rgba(236, 239, 247, 1); }








/*separator*/
.separator{
    position: relative;
    display: inline-block;
    clear: both;
    background: rgba(0, 0, 0, 0.07) none repeat scroll 0 0;
    bottom: 0;
    height: 1px;
    width: 33%;
}
.separator::before {
  background: #4fc1f0 none repeat scroll 0 0;
  content: "";
  display: block;
  height: 1px;
  position: absolute;
  transition: all 0.4s ease 0s;
  width: 100px;
}

.section-title:hover .separator::before {
  width: 75%;
}

.separator i {
  background: #ECEFF7 none repeat scroll 0 0;
  color: #4fc1f0;
  display: block;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  text-align: center;
  top: -20px;
  width: 40px;
}
.separator span {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #4fc1f0;
  border-radius: 100%;
  display: block;
  height: 10px;
  position: absolute;
  top: -5px;
  width: 10px;
}
.separator i, .separator span {
  left: 0;
  transform: none;
}
.text-center .separator::before, .text-center .separator i, .text-center .separator span  {
  left: 50%;
  transform: translateX(-50%);
}

.text-right .separator::before, .text-right .separator i, .text-right .separator span  {
  left: auto;
  transform: none;
  right: 0;
}

/*tooltip*/
.socile-icon-tooltip [data-tooltip], .socile-icon-tooltip .tooltip {
    cursor: pointer;
    position: relative;
}
.socile-icon-tooltip [data-tooltip]::before, .socile-icon-tooltip [data-tooltip]::after, .socile-icon-tooltip .tooltip::before, .socile-icon-tooltip .tooltip::after {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transform: translate3d(0px, 0px, 0px);
    transition: opacity 0.2s ease-in-out 0s, visibility 0.2s ease-in-out 0s, transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24) 0s;
    visibility: hidden;
}
.socile-icon-tooltip [data-tooltip]:hover::before, .socile-icon-tooltip [data-tooltip]:hover::after, .socile-icon-tooltip [data-tooltip]:focus::before, .socile-icon-tooltip [data-tooltip]:focus::after, .socile-icon-tooltip .tooltip:hover::before, .socile-icon-tooltip .tooltip:hover::after, .socile-icon-tooltip .tooltip:focus::before, .socile-icon-tooltip .tooltip:focus::after {
    opacity: 1;
    visibility: visible;
}
.socile-icon-tooltip .tooltip::before, .socile-icon-tooltip [data-tooltip]::before {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: 6px solid rgba(0, 0, 0, 0);
    content: "";
    z-index: 1001;
}
.socile-icon-tooltip .tooltip::after, .socile-icon-tooltip [data-tooltip]::after {
    background-color: #00a9da;
    border-radius: 3px;
    color: #ffffff;
    content: attr(data-tooltip);
    font-size: 14px;
    line-height: 1.2;
    padding: 8px;
    text-align: center;
    width: 100px;
    z-index: 1000;
}
.socile-icon-tooltip [data-tooltip]::before, .socile-icon-tooltip [data-tooltip]::after, .socile-icon-tooltip .tooltip::before, .socile-icon-tooltip .tooltip::after, .socile-icon-tooltip .tooltip-top::before, .socile-icon-tooltip .tooltip-top::after {
    bottom: 100%;
    left: 50%;
}
.socile-icon-tooltip [data-tooltip]::before, .socile-icon-tooltip .tooltip::before, .socile-icon-tooltip .tooltip-top::before {
    border-top-color: #00a9da;
    margin-bottom: -12px;
    margin-left: -6px;
}
.socile-icon-tooltip [data-tooltip]::after, .socile-icon-tooltip .tooltip::after, .socile-icon-tooltip .tooltip-top::after {
    margin-left: -50px;
}
.socile-icon-tooltip [data-tooltip]:hover::before, .socile-icon-tooltip [data-tooltip]:hover::after, .socile-icon-tooltip [data-tooltip]:focus::before, .socile-icon-tooltip [data-tooltip]:focus::after, .socile-icon-tooltip .tooltip:hover::before, .socile-icon-tooltip .tooltip:hover::after, .socile-icon-tooltip .tooltip:focus::before, .socile-icon-tooltip .tooltip:focus::after, .socile-icon-tooltip .tooltip-top:hover::before, .socile-icon-tooltip .tooltip-top:hover::after, .socile-icon-tooltip .tooltip-top:focus::before, .socile-icon-tooltip .tooltip-top:focus::after {
    transform: translateY(-25px);
}
:focus {
    outline: -webkit-focus-ring-color auto 0px;
}

:focus {
    outline: -mos-focus-ring-color auto 0px;
}


button:focus {
  outline: none;
}

.relative{
    position: relative;
}


.border-bottom-1{
    border-bottom: 1px solid #d5d5d5;
}


.border-top-1 {
  border-top: 1px solid #dcdcdc;
}


.overly-style{
    position: relative;
}


.overly-style:before{
    position: relative;
}



.custom .row {
  margin-left: -5px;
  margin-right: -5px;
}
.custom .row .col-md-7 , .custom .row .col-md-5 {
  padding-left: 5px;
  padding-right: 5px;
}






























/*-----------------------------------------------------------------------------------

    Template Name: Furniture - Minimalist eCommerce HTML5 Template
    Description: This is html5 template
    Author: HasTech
    Version: 1.1

-----------------------------------------------------------------------------------
    
    [Table of contents] 
	
    1. Template default css (assets/css/bundle.css)
    2. Home furniture
    3. Home electronics
    4. Home jewellery
    5. Home fashion
    6. Home toy
    7. Home food & drink
    8. Breadcrumb style
    9. About us
    10. Shop grid view
    11. Shop sidebar
    12. Shop list
    13. breadcrumb style 2
    14. product details
    15. Product details 2
    16. product details 4
    17. Product details 7
    18. Product details 8
    19. Product details 9
    20. Shop filters
    21. Shopping cart
    22. Checkout page
    23. Login page
    24. Blog sidebar
    25. Blog details
    26. Contact page
    27. ScrollUp
    
-----------------------------------------------------------------------------------*/




/*----------- 2. Home furniture --------*/


/* header area */
.header-area-padding {
  padding: 35px 0;
}
.header-search-cart {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.header-cart > button {
  color: #4b4a48;
  font-size: 20px;
}
.header-sidebar button {
  font-size: 27px;
  color: #4b4a48;
}
.header-search > button {
  color: #000000;
  font-size: 22px;
}
.common-style > button {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  line-height: 1;
  padding: 0;
  margin-left: 25px;
  cursor: pointer;
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
}
.common-style > button:hover {
  color: #ee3333;
}
.header-cart {
  margin-top: 3px;
}
.header-search {
  margin-top: 3px;
}
/* header cart */
.sidebar-cart {
  background: #ffffff;
  color: #353535;
  height: 100vh;
  position: fixed;
  right: -480px;
  top: 0;
  -webkit-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
  width: 480px;
  z-index: 9999;
}
.sidebar-cart.inside {
	right: 0;
}
.wrap-sidebar {
  height: 100%;
  margin: 0;
  overflow-y: auto;
  padding: 45px 46px 0;
  width: 100%;
}
.sidebar-cart-all {
  padding-bottom: 39px;
}
.cur-lang-acc-active {
  background: #ffffff;
  color: #353535;
  height: 100vh;
  position: fixed;
  right: -300px;
  top: 0;
  -webkit-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
  width: 300px;
    z-index: 9999;
}
.cur-lang-acc-active.inside {
  right: 0;
}
.sidebar-cart-icon, .sidebar-nav-icon {
  display: block;
  margin-bottom: 14px;
  overflow: hidden;
}
.sidebar-cart-icon button , .sidebar-nav-icon button {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  color: #4b4b4b;
  float: right;
  font-size: 50px;
  padding: 0;
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
  cursor: pointer;
}
.sidebar-cart-icon button:hover , .sidebar-search-icon button:hover , .sidebar-search-input form .form-search button:hover , .sidebar-nav-icon button:hover {
  color: #ee3333;
}
.cart-content > h3 {
  color: #4b4b4b;
  font-size: 24px;
  font-weight: 600;
}
.cart-content ul li.single-product-cart {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 27px;
}
.cart-content ul li.single-product-cart:last-child {
  margin-bottom: 0px;
}
.cart-title > h3 {
  color: #5d5d5d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}
.cart-title > span {
  color: #ee3333;
  font-weight: 600;
}
.cart-title {
  margin: 0px 0 18px 30px;
}
.cart-delete {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 100;
  -webkit-flex-grow: 100;
      -ms-flex-positive: 100;
          flex-grow: 100;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}
.cart-delete a i {
  color: #4b4b4b;
  font-size: 24px;
  line-height: 1;
}
.cart-delete a i:hover {
  color: #ee3333;
}
.cart-content ul {
  margin-top: 47px;
}
.cart-total {
  border-top: 1px solid #e3e3e3;
  margin-top: 29px;
  padding-top: 17px;
  text-align: right;
  width: 100%;
}
.cart-total h4 {
  color: #5d5d5d;
  font-size: 18px;
  font-weight: 600;
}
.cart-total h4 span {
  color: #ee3333;
  font-size: 18px;
  font-weight: 600;
}
.cart-checkout-btn > a.no-mrg {
  margin-right: 0px;
}
.cart-checkout-btn {
  margin-top: 13px;
}
.wrapper .body-overlay {
  background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;
  cursor: crosshair;
  height: 100%;
  left: 0;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  position: fixed;
  top: 0;
  -webkit-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
  visibility: hidden;
  width: 100%;
  z-index: 999;
}
.wrapper.overlay-active .body-overlay {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
}
.btn-hover {
  position: relative;
}
.btn-hover:before {
  background: #ee3333 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transform-origin: 0 50% 0;
      -ms-transform-origin: 0 50% 0;
          transform-origin: 0 50% 0;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
  z-index: -1;
}
.btn-hover:hover:before {
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
}
.cart-btn-style {
  background: #e3e3e3 none repeat scroll 0 0;
  color: #5d5d5d;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-right: 30px;
  padding: 18px 48px;
  text-transform: uppercase;
  -webkit-transform: perspective(1px) translateZ(0px);
          transform: perspective(1px) translateZ(0px);
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  -webkit-transition-property: color;
  transition-property: color;
  vertical-align: middle;
}
.btn-hover:hover {
  color: white;
}





/* search */
.main-search-active {
  background: rgba(0, 0, 0, 0.92) none repeat scroll 0 0;
  color: #353535;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  min-height: 100vh;
  padding: 32px 46px 39px;
  position: fixed;
  right: 0;
  top: 0;
  -webkit-transform: translateX(110%);
      -ms-transform: translateX(110%);
          transform: translateX(110%);
  -webkit-transition: -webkit-transform 0.5s ease-in-out 0s;
  transition: -webkit-transform 0.5s ease-in-out 0s;
  transition: transform 0.5s ease-in-out 0s;
  transition: transform 0.5s ease-in-out 0s, -webkit-transform 0.5s ease-in-out 0s;
  width: 100%;
  z-index: 9999;
}
.main-search-active.inside {
  -webkit-transform: translateX(0px);
      -ms-transform: translateX(0px);
          transform: translateX(0px);
  z-index: 9999;
}
.sidebar-search-input {
  padding: 300px 0 0;
}
.sidebar-search-input form {
  position: relative;
}
.sidebar-search-input form .form-search {
  position: relative;
}
.sidebar-search-input form .form-search input {
  background-color: transparent;
  border-color: #dadada;
  border-style: solid;
  border-width: 0 0 1px;
  color: #fff;
  display: block;
  font-size: 18px;
  height: 62px;
  line-height: 62px;
  padding: 0;
  width: 800px;
}
.sidebar-search-input form .form-search button {
  background-color: transparent;
  border: medium none;
  color: #dadada;
  font-size: 30px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 6px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.sidebar-search-icon {
  display: block;
  float: right;
  overflow: hidden;
  position: absolute;
  right: 375px;
}
.sidebar-search-icon button {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  color: #fff;
  cursor: pointer;
  font-size: 50px;
  line-height: 1;
  padding: 0;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.sidebar-search-input form .form-search input::-moz-placeholder {
  color: #fff;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.sidebar-search-input form .form-search input::-webkit-placeholder {
  color: #fff;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}




/* cur-lang-acc */
.single-currency-language-account {
  margin-bottom: 23px;
}
.cur-lang-acc-title > h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 13px;
  text-transform: uppercase;
}
.cur-lang-acc-title > h4 span {
  color: #ee3333;
}
.cur-lang-acc-dropdown li {
  margin-bottom: 9px;
}
.cur-lang-acc-dropdown li a img {
  margin-right: 5px;
}
.cur-lang-acc-dropdown li:last-child {
  margin-bottom: 0px;
}
.cur-lang-acc-dropdown ul li a {
  text-transform: capitalize;
}

/* furniture menu style */

.clickable-mainmenu-btn {
  left: 0px;
  position: fixed;
  top: 450px;
  z-index: 999;
}
.clickable-mainmenu-btn a {
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  color: #4b4a48;
  display: inline-block;
  font-size: 40px;
  line-height: 1;
  padding: 16px 32px;
}
.clickable-mainmenu-btn a:hover {
  color: #fff;
  background-color: #ee3333;
}
.clickable-mainmenu {
  background: rgba(0, 0, 0, 0.92) none repeat scroll 0 0;
  color: #353535;
  min-height: 100vh;
  padding: 295px 46px 39px;
  position: fixed;
  right: 0;
  top: 0;
  -webkit-transform: translateX(110%);
      -ms-transform: translateX(110%);
          transform: translateX(110%);
  -webkit-transition: -webkit-transform 0.5s ease-in-out 0s;
  transition: -webkit-transform 0.5s ease-in-out 0s;
  transition: transform 0.5s ease-in-out 0s;
  transition: transform 0.5s ease-in-out 0s, -webkit-transform 0.5s ease-in-out 0s;
  width: 100%;
  z-index: 9999;
}
.clickable-mainmenu.inside {
  -webkit-transform: translateX(0px);
      -ms-transform: translateX(0px);
          transform: translateX(0px);
  z-index: 9999;
}
.slinky-menu.slinky-theme-default {
  display: inline-block;
  width: 290px;
}
.slinky-theme-default {
  background: transparent none repeat scroll 0 0;
}
#menu li a {
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 15px;
  text-transform: capitalize;
}
#menu li a:hover {
  color: #ee3333;
}
.slinky-theme-default a:hover:not(.back) {
  background: transparent none repeat scroll 0 0;
}
.clickable-mainmenu-icon button {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  color: #fff;
  cursor: pointer;
  font-size: 50px;
  padding: 0;
  position: absolute;
  right: 375px;
  top: 25px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.clickable-mainmenu-icon button:hover {
  color: #ee3333;
}
.slinky-theme-default .back:before {
  padding: 0;
}
/* slider */
.single-slider {
  position: relative;
}

.slider-content-style-1 > h3 {
  color: #000000;
  font-family: pacifico;
  font-size: 32px;
}
.slider-content-style-1 > h3 span {
  color: #ee3333;
}
.slider-content-style-1 h2 {
  color: #000000;
  font-size: 54px;
  font-weight: bold;
  letter-spacing: 2.5px;
  margin: 6px 0 19px;
}
.slider-content-style-1 p {
  color: #000000;
  letter-spacing: 0.5px;
  width: 47%;
}
.slider-btn-style {
  border: 2px solid #000000;
  color: #000000;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1;
  margin-top: 19px;
  padding: 23px 49px 24px;
  text-transform: uppercase;
  -webkit-transform: perspective(1px) translateZ(0px);
          transform: perspective(1px) translateZ(0px);
}
.slider-btn-style:hover {
  border: 2px solid #ee3333;
}
.slider-text-right {
  text-align: right;
}
.slider-content-style-1.slider-text-right p {
  float: right;
  text-align: right;
  width: 41%;
}
.slide-right-pera {
  display: block;
  overflow: hidden;
}
/* Default Slider Animations */
.owl-item .slider-content * {
  -webkit-animation-duration: 1.3s;
  animation-duration: 1.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.owl-item.active .slider-content * {
}
.owl-item.active .slider-animated-1 h3 {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

.owl-item.active .slider-animated-1 h2 {
  -webkit-animation-delay: 1.1s;
  animation-delay: 1.1s;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

.owl-item.active .slider-animated-1 p {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

.owl-item.active .slider-animated-1 a {
  -webkit-animation-delay: 1.3s;
  animation-delay: 1.3s;
  -webkit-animation-name: bounceInLeft;
  animation-name: fadeInLeft;
}

/* animation 2 */
.owl-item.active .slider-animated-2 h3 {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.owl-item.active .slider-animated-2 h2 {
  -webkit-animation-delay: 1.1s;
  animation-delay: 1.1s;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.owl-item.active .slider-animated-2 p {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.owl-item.active .slider-animated-2 a {
  -webkit-animation-delay: 1.3s;
  animation-delay: 1.3s;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

/* banner */
.single-banner > img {
  width: 100%;
}
.single-banner a img {
  width: 100%;
}
.single-banner {
  position: relative;
}
.banner-content-position1 {
  left: 0;
  padding: 30px 34px;
  position: absolute;
  text-align: center;
  top: 0;
}
.banner-content > h3 {
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
  text-transform: uppercase;
}
.banner-content > h3 span , .banner-content > p span {
  color: #ee3333;
}
.banner-content > p {
  color: #000000;
  margin: 0;
}
.banner-content-position2 {
  padding: 78px 75px 50px;
  position: absolute;
  right: 0;
  top: 0;
}
.banner-content-position2 > span {
  color: #000000;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 0.5px;
  line-height: 1;
  margin-bottom: 2px;
}

.banner-content.banner-content-position2 > h3 {
  position: relative;
  padding-bottom: 18px;
}
.banner-content.banner-content-position2 > h3:before {
  position: absolute;
  content: "";
  width: 100px;
  height: 2px;
  background-color: #a8a5a5;
  bottom: 0;
  left: 0;
}
.banner-content-position3 {
  bottom: 0;
  left: 0;
  padding: 30px 34px 27px;
  position: absolute;
  text-align: center;
}
/* section title */

.section-title > h2 {
  color: #3e3e3e;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}
.section-title p {
  color: #3e3e3e;
  font-size: 14px;
  margin: 0;
}
/* single product */
.product-img img {
  width: 100%;
}
.single-product , .product-img {
  position: relative;
}
.product-img > span {
  background-color: #626262;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  left: 20px;
  letter-spacing: 1px;
  line-height: 1;
  padding: 4px 11px 5px;
  position: absolute;
  text-transform: uppercase;
  top: 20px;
}

.product-action {
  display: inline-block;
  left: 0;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.product-action > a {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #474747;
  display: inline-block;
  font-size: 27px;
  height: 45px;
  margin: 0 3px;
  text-align: center;
  width: 45px;
}
.product-action > a:hover {
  color: #fff;
  background-color: #ee3333;
}

.product-action > a i {
  font-size: 27px;
  line-height: 45px;
}

.product-title-price {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.product-title > h4 {
  color: #5d5d5d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
.product-title > h4 a {
  color: #5d5d5d;
}
.product-title > h4 a:hover , .product-categori > a:hover {
  color: #ee3333;
}
.product-price > span {
  color: #ee3333;
  font-weight: 600;
}
.product-content {
  line-height: 1;
  padding-top: 17px;
}

.product-cart-categori {
  overflow: hidden;
  padding-bottom: 5px;
  position: relative;
}
.product-cart > span {
  color: #474747;
  display: inline-block;
  line-height: 1;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  text-transform: capitalize;
  -webkit-transform: translateY(0px);
      -ms-transform: translateY(0px);
          transform: translateY(0px);
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}
.product-categori {
  left: 0;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  position: absolute;
  top: 0;
  -webkit-transform: translateY(15px);
      -ms-transform: translateY(15px);
          transform: translateY(15px);
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}
.product-categori > a {
  color: #474747;
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
}
.product-categori > a i {
  color: #4b4a48;
  font-size: 16px;
  margin-right: 4px;
}
.single-product:hover .product-cart > span {
  -webkit-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
          transform: translateY(-15px);
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
.single-product:hover .product-categori {
  -webkit-transform: translateY(0px);
      -ms-transform: translateY(0px);
          transform: translateY(0px);
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.single-product:hover .product-action {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.product-action > a.animate-left {
  -webkit-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
          transform: translateY(-20px);
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.product-action > a.animate-right {
  -webkit-transform: translateY(20px);
      -ms-transform: translateY(20px);
          transform: translateY(20px);
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.single-product:hover .product-action > a.animate-left {
  -webkit-transform: translateY(0px);
      -ms-transform: translateY(0px);
          transform: translateY(0px);
}
.single-product:hover .product-action > a.animate-right {
  -webkit-transform: translateY(0px);
      -ms-transform: translateY(0px);
          transform: translateY(0px);
}
.product-slider-active {
  width: 100%;
}
.product-slider-active div[class^="col-"] {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}
.product-tab-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.product-tab-list a {
  line-height: 1;
  margin: 0 18px;
}
.product-tab-list a h4 {
  color: #454545;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
}
.product-tab-list a.active h4 {
  color: #ee3333;
}
.product-menu-mrg {
  padding-top: 3px;
}
.tab-content.jump > .tab-pane {
  display: block;
  height: 0;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  overflow: hidden;
}

.tab-content.jump > .tab-pane.active {
  display: block;
  height: auto;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  overflow: visible;
}
/* limited-content */
.shop-limited-content {
  position: relative;
  z-index: 9;
}
.shop-limited-content > h2 {
  color: #f4f4f4;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 50px;
  margin-bottom: 9px;
}
.limited-btn {
  background-color: #f4f4f4;
  color: #353535;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1;
  margin-top: 19px;
  padding: 17px 41px 18px;
  text-transform: uppercase;
  -webkit-transform: perspective(1px) translateZ(0px);
          transform: perspective(1px) translateZ(0px);
}

/* blog area */

.blog-img {
  margin-bottom: 25px;
}
.blog-img img {
  width: 100%;
}
.blog-info > h3 {
  color: #262626;
  font-size: 24px;
}
.blog-meta {
  margin: 10px 0 10px;
}
.blog-meta ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
.blog-meta ul li {
  color: #858585;
  font-size: 13px;
  position: relative;
}
.blog-meta ul li a {
  color: #858585;
}

.blog-meta ul li a:hover {
  color: #ee3333;
}

.blog-meta ul li + li {
  margin-left: 10px;
  padding-left: 13px;
}
.blog-meta ul li + li:before {
  background: #c2c2c2 none repeat scroll 0 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  width: 3px;
}
.blog-info > p {
  color: #333;
  font-size: 14px;
  line-height: 30px;
  margin: 0;
}

/* footer area */

.footer-widget-l-content > h4 {
  color: #585858;
  font-size: 15px;
  letter-spacing: 0.05px;
  margin-bottom: 17px;
}
.footer-widget-l-content > ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
.footer-widget-l-content > ul li {
  margin-right: 15px;
}
.footer-widget-l-content a {
  border: 1px solid #3f3f3f;
  border-radius: 50px;
  color: #585858;
  display: inline-block;
  height: 30px;
  text-align: center;
  width: 30px;
}
.footer-widget-l-content a:hover {
  border: 1px solid #ee3333;
  background-color: #ee3333;
  color: #f5f5f5;
}
.footer-widget-l-content a i {
  line-height: 29px;
}
.footer-nav ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.footer-nav ul li {
  margin: 0 19px;
}
.footer-nav ul li a {
  color: #474747;
  font-weight: 600;
  text-transform: uppercase;
}
.footer-nav ul li a:hover {
  color: #ee3333;
}
.footer-widget-m-content > p {
  color: #585858;
  margin: 0;
}
.footer-logo {
  margin-bottom: 25px;
}
.footer-nav {
  margin-bottom: 13px;
  padding-bottom: 15px;
  position: relative;
}
.footer-nav:before {
  background: #6d6d6d none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 1px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 160px;
}
.footer-widget-r-content li span {
  font-weight: 600;
  text-transform: uppercase;
}
.footer-widget-r-content li {
  color: #585858;
  margin-bottom: 8px;
}
.footer-widget-r-content li:last-child {
  margin-bottom: 0px;
}
.footer-widget-l-content {
  margin-top: 30px;
}
.footer-widget-r-content {
  margin-top: 25px;
}

/* modal style */

.modal-body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 50px;
}
.modal-dialog {
  margin: 150px auto;
  min-width: 878px;
}
.qwick-view-left {
  min-width: 320px;
}
.quick-view-tab-content .tab-pane > img {
  width: 100%;
}
.quick-view-list {
  margin-top: 10px;
}
.quick-view-list a {
  margin-right: 10px;
}
.quick-view-list a:last-child {
  margin-right: 0px;
}
.qwick-view-left {
  margin-right: 30px;
}
.modal-content {
  border-radius: 0rem;
}
.qwick-view-content > h3 {
  color: #707070;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
.price span {
  color: #707070;
  font-size: 15px;
  font-weight: 600;
}
.price span.new {
  color: #ee3333;
  margin-right: 12px;
}
.price span.old {
  color: #707070;
  text-decoration: line-through;
}
.quick-view-rating i {
  color: #000000;
  font-size: 18px;
  margin-right: 5px;
}
.quick-view-rating i.red-star {
  color: #ee3333;
}
.rating-number {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  margin-bottom: 30px;
}
.quick-view-number > span {
  color: #808080;
  display: block;
  font-size: 14px;
  margin: 3px 0 0 10px;
}
.qwick-view-content > p {
  color: #545454;
  margin-bottom: 25px;
}

.select-option-part label {
  color: #707070;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
}

.select-option-part {
  margin-bottom: 35px;
}

.select-option-part select {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-expand: none;
  border: 1px solid #dcdcdc;
  box-shadow: none;
  color: #828282;
  font-size: 14px;
  height: 43px;
  padding-left: 20px;
  position: relative;
  width: 100%;
  background: rgba(0, 0, 0, 0) url("../../assets/img/icon-img/1.png") no-repeat scroll right 20px center;
}
select::-ms-expand {
    display: none;
}

.qtybutton {
  color: #727272;
  cursor: pointer;
  float: left;
  font-size: 16px;
  font-weight: 600;
  height: 20px;
  line-height: 20px;
  position: relative;
  text-align: center;
  width: 20px;
}
input.cart-plus-minus-box {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  float: left;
  font-size: 16px;
  height: 25px;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 25px;
}
.cart-plus-minus *::-moz-selection {
  background: transparent none repeat scroll 0 0;
  color: #333;
  text-shadow: none;
}
.cart-plus-minus {
  border: 1px solid #dcdcdc;
  overflow: hidden;
  padding: 10px 0 10px 5px;
  width: 80px;
}
.quickview-plus-minus {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  padding-top: 5px;
}
.quickview-btn-cart > a {
  background-color: #ee3333;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.08px;
  line-height: 1;
  padding: 17px 35px;
  position: relative;
  text-transform: uppercase;
  z-index: 5;
}
.quickview-btn-wishlist > a {
  border: 1px solid #dcdcdc;
  color: #727272;
  display: inline-block;
  font-size: 22px;
  padding: 7px 18px 6px;
  z-index: 9;
}
.quickview-btn-wishlist > a:hover {
  border: 1px solid transparent;
}
.quickview-btn-cart {
  margin: 0 30px;
}
.qtybutton.inc {
  margin-top: 2px;
}
.price {
  margin: 9px 0 8px;
}
#exampleModal .close {
  color: #fff;
  float: right;
  font-size: 50px;
  font-weight: 700;
  line-height: 1;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  position: absolute;
  right: 370px;
  text-shadow: 0 1px 0 #fff;
  top: 32px;
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
  cursor: pointer;
}
#exampleModal .close:hover {
  color: #ee3333;
}
.modal-backdrop.show {
  opacity: 0.8;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
}
.modal-content .close:hover {
  color: #ee3333;
}

/*------- 3. Home electronics ------*/

.header-area-2 .logo {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}
.header-search-cart {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
              -ms-grid-row-align: center;
          align-items: center;
  height: 100%;
}
.menu-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
/* main-menu hm-2*/
.main-menu ul li {
  margin: 0 19px;
  position: relative;
  display: inline-block;
}
.main-menu ul li a {
  color: #474747;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 101px;
}
.main-menu.sidebar-main-menu ul li a {
  text-transform: capitalize;
}
.main-menu nav > ul > li:hover > a {
  color: #ee3333;
}
.main-menu nav > ul > li > ul {
  background: #fff none repeat scroll 0 0;
  border-top: 1px solid #dcdcdc;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  display: block;
  left: -23px;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  padding: 30px 20px 34px;
  position: absolute;
  text-align: left;
  top: 120%;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  visibility: hidden;
  width: 250px;
  z-index: 999;
}
.main-menu nav > ul > li:hover > ul {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  top: 100%;
  visibility: visible;
}
.main-menu nav > ul > li > ul > li {
  display: block;
  margin: 0 0 13px;
  padding: 0;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  position: relative;
}
.main-menu nav > ul > li > ul > li:last-child {
  margin: 0 0 0px;
}
.main-menu nav > ul > li > ul > li > a {
  color: #333;
  display: block;
  font-size: 15px;
  font-weight: 400;
  line-height: inherit;
  padding: 0;
  text-transform: capitalize;
}
.main-menu nav > ul > li > ul > li > a:hover {
  color: #ee3333;
}
.main-menu nav > ul > li > ul.dropdown > li:hover {
  padding-left: 20px;
}
.main-menu nav > ul > li > ul.dropdown > li:before , .main-menu nav > ul > li > .mega-dropdown > ul > li:before {
  background: #ee3333 none repeat scroll 0 0;
  content: "";
  height: 3px;
  left: 0;
  position: absolute;
  top: 10px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 0px;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
.main-menu nav > ul > li > ul.dropdown > li:hover:before , .main-menu nav > ul > li > .mega-dropdown > ul > li:hover:before {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  width: 10px;
}
/* mega menu hm-2 */
.main-menu nav > ul > li > .mega-dropdown {
  background: #fff none repeat scroll 0 0;
  border-top: 1px solid #dcdcdc;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  display: block;
  left: -268px;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  padding: 14px 20px 0px 32px;
  position: absolute;
  text-align: left;
  top: 120%;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  visibility: hidden;
  width: 690px;
  z-index: 999;
}
.main-menu nav > ul > li > .mega-dropdown > ul {
  display: block;
  float: left;
}
.main-menu nav > ul > li > .mega-dropdown > ul.single-mega-width {
  margin-top: 20px;
  width: 30%;
}
.main-menu nav > ul > li > .mega-dropdown > ul.single-mega-width2 {
  display: block;
  float: left;
  padding-right: 8px;
  width: 40%;
  margin-top: 18px;
}
.main-menu nav > ul > li > .mega-dropdown ul {
  display: block;
}
.main-menu nav > ul > li:hover > .mega-dropdown {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  top: 100%;
  visibility: visible;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li {
  display: block;
  margin: 0 0 10px;
  padding: 0;
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li:last-child {
  margin: 0 0 0px;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li.menu-title {
  color: #4e4e4e;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 17px;
  text-transform: uppercase;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li.menu-pading-none:before {
  content: inherit;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li.menu-pading-none:hover {
  padding-left: inherit;
}
.main-menu.sidebar-main-menu nav > ul > li > .mega-dropdown > ul > li.menu-pading-none:hover {
  padding-left: 0;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li:hover {
  padding-left: 20px;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li > a {
  color: #333;
  display: block;
  font-size: 15px;
  font-weight: 400;
  line-height: inherit;
  padding: 0;
  text-transform: capitalize;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li > a:hover {
  color: #ee3333;
}
.mega-item-img {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li.menu-mrg-nn {
  margin: 0 0 0px;
}
.mobile-menu .mean-nav ul.menu-overflow {
  height: 220px;
  margin-top: 10px;
  overflow-y: auto;
}

/* intelligent-header */

.headroom {
    will-change: transform;
    -webkit-transition: -webkit-transform 200ms linear;
    transition: -webkit-transform 200ms linear;
    transition: transform 200ms linear;
    transition: transform 200ms linear, -webkit-transform 200ms linear;
}
.headroom--pinned {
    -webkit-transform: translateY(0%);
        -ms-transform: translateY(0%);
            transform: translateY(0%);
}
.headroom--unpinned {
    -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
            transform: translateY(-100%);
}
.intelligent-header {
    background-color: #fff;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 9999;
}
.intelligent-header-pd {
    padding: 0 155px;
}
.header-space {
  height: 90px;
}

.intelligent-header.headroom--pinned {
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.intelligent-header.headroom--not-top {
  box-shadow: 0 1px 3px rgba(50, 50, 50, 0.4);
}
.header-space {
  height: 101px;
}




/* slider home-2 */


.slider-position-images {
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  position: absolute;
  right: 162px;
  top: 50%;
  -webkit-transform: translateX(40%) translateY(-50%);
      -ms-transform: translateX(40%) translateY(-50%);
          transform: translateX(40%) translateY(-50%);
  -webkit-transition: all 1s ease-in-out 2s;
  transition: all 1s ease-in-out 2s;
  width: 693px;
}
.slider-active .owl-item.active .slider-position-images {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  -webkit-transform: translateX(0%) translateY(-50%);
      -ms-transform: translateX(0%) translateY(-50%);
          transform: translateX(0%) translateY(-50%);
}
.slider-content-style-2 h2 {
  color: #000000;
  font-size: 36px;
  line-height: 48px;
}
.slider-content-style-2 a , .slider-content-style-3 a , .slider-content-style-6 a {
  border-bottom: 1px solid #ee3333;
  color: #ee3333;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  padding-bottom: 5px;
  text-transform: capitalize;
}
.slider-content-style-2 a:hover {
  color: #000000;
}

/* home-2 banner */


.single-banner-2 > img {
  width: 100%;
}
.single-banner-2 {
  position: relative;
}
.banner-content-2 {
  padding: 20px 55px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.banner-content-2 > span {
  color: #939292;
  font-size: 16px;
}
.banner-content-2 > h4 {
  color: #2d2d2d;
  font-size: 30px;
  font-weight: 600;
  margin: 3px 0 21px;
}
.banner-content-2 > a {
  position: relative;
  color: #ee3333;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
}
.banner-content-2 > a:before {
  background: #ee3333 none repeat scroll 0 0;
  bottom: -5px;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 0;
}
.banner-content-2 > a:hover:before {
  background: #e51515 none repeat scroll 0 0;
  width: 100%;
}

/* testimonials hm-2 */

.single-testimonial > p {
  color: #ffffff;
  font-weight: 600;
  line-height: 30px;
  margin: 21px auto 30px;
  width: 66%;
}

.single-testimonial > h4 {
  color: #f7f6f6;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.single-testimonial > span {
  color: #f7f6f6;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.owl-carousel .owl-item .single-testimonial img {
  display: block;
  margin: 0 auto;
  width: auto;
}

/* brand logo hm-2*/

.brand-logo-active {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.single-logo {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.single-logo > img {
  width: auto;
}

.brand-logo-active.owl-carousel .owl-item img {
  width: auto;
}
.scroll-top {
  color: #636363;
  display: inline-block;
  font-weight: 600;
}
.scroll-top:hover {
  color: #ee3333;
}
.scroll-top > span {
  display: block;
}
.scroll-top > span i {
  display: inline-block;
  font-size: 18px;
}

/*----------- 4. Home jewellery ----------*/

/* header srerch jewellery */
.menu-search-cart {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}
.menu-search-cart .header-search-cart {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
              -ms-grid-row-align: center;
          align-items: center;
  height: 100%;
  margin-top: 36px;
}
.menu-search-cart .header-cart {
  margin-top: 0;
}
.menu-search-cart .main-menu {
  margin-right: 17px;
}

/* slider jewellery */

.slider-content-style-3 h3 {
  color: #373737;
  font-family: pacifico;
  font-size: 24px;
  letter-spacing: 1px;
}
.slider-content-style-3 h2 {
  color: #2e2e2e;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 25px 0 9px;
}

/* banner jewellery */

.single-banner-3 {
  position: relative;
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
  overflow: hidden;
}
.single-banner-3 a img {
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
}
.single-banner-3:hover a img {
  -webkit-transform: scale(1.3) rotate(-10deg);
      -ms-transform: scale(1.3) rotate(-10deg);
          transform: scale(1.3) rotate(-10deg);
}
.single-banner-3 img {
  width: 100%;
}
.banner-content3-position1 {
  left: 0;
  padding: 47px 60px;
  position: absolute;
  top: 0;
}
.common-banner-style-3 > h2 {
  color: #585858;
  font-size: 36px;
  font-weight: 600;
  line-height: 50px;
  margin: 0;
}
.common-banner-style-3 > h2 span {
  color: #ee3333;
}
.banner-content3-position3 {
  padding: 47px 60px;
  position: absolute;
  right: 0;
  top: 0;
}

/* footer map */

.footer-map {
  position: relative;
}
.footer-map-icon {
  position: absolute;
  top: 50%;
}
.footer-map-icon {
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.footer-title {
  color: #454545;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
.footer-widget-about > p {
  font-size: 16px;
  line-height: 30px;
  margin: 0;
  color: #262626;
}
.footer-widget-about {
  padding-right: 70px;
}
.footer-social li {
  display: inline-block;
  margin: 0 15px;
}
.footer-social li a {
  color: #585858;
  font-size: 18px;
}
.footer-paymethod li {
  display: inline-block;
  margin: 0 6px;
}
.footer-paymethod {
  margin: 25px 0 15px;
}
.footer-map > img {
  width: 100%;
}

/*------- 5. Home fashion --------*/

/* banner fashion */
.single-banner4 img {
  width: 100%;
}
.single-banner4 {
  position: relative;
}
.banner-content-4 {
  padding: 20px 62px;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.banner-content-4 > h3 {
  color: #656565;
  font-size: 22px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 17px;
}
.banner-content-4 > a {
  color: #787777;
  font-weight: 600;
}
.banner-content-4 > a:hover {
  color: #ee3333;
}
.new-collection-slider div[class^="col-"] {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}

/* coundown fashion */

.coundown-auto > h2 {
  font-size: 36px;
  color: #3f3f3f;
  font-weight: bold;
}
.coundown-auto > p {
  font-size: 15px;
  line-height: 26px;
  margin: 16px 0 21px;
}
.timer span {
  color: #535353;
  display: inline-block;
  font-size: 48px;
  font-weight: bold;
  line-height: 56px;
  margin-right: 34px;
  text-align: center;
}
.timer span p {
  color: #535353;
  font-size: 17px;
  font-weight: 600;
}
.coundown-auto > a {
  color: #535353;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid #535353;
  padding-bottom: 5px;
}
.coundown-auto > a:hover {
  color: #ee3333;
  border-bottom: 1px solid #ee3333;
}
.timer {
  margin-bottom: 24px;
}

/* shop-services hm-fashion */

.single-shop-services {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.single-shop-content h5 {
  color: #4f4e4e;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}
.single-shop-content > p {
  color: #4f4e4e;
  font-weight: 600;
  margin: 0;
}
.single-shop-content {
  margin-left: 20px;
  margin-top: 4px;
}
.single-shop-services-all {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}


/*-------- 6. Home toy --------*/

/* sidebar-style home-toy */
.sidebar-style {
  background: #f9f9f9 none repeat scroll 0 0;
  height: 100%;
  position: fixed;
  top: 0;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: 445px;
  z-index: 7;
}
.sidebar-logo {
  padding-left: 148px;
}
.sidebar-wrapper {
  margin-left: 445px;
}
.sidebar-main-menu.main-menu ul li {
  display: block;
  margin: 0;
  padding: 0 0 20px;
}
.sidebar-main-menu.main-menu nav > ul > li > ul , .sidebar-main-menu.main-menu nav > ul > li > .mega-dropdown {
  left: 110%;
  top: 0;
}
.sidebar-main-menu.main-menu nav > ul > li:hover > ul , .sidebar-main-menu.main-menu nav > ul > li:hover > .mega-dropdown {
  left: 100%;
  top: 0;
}
.sidebar-main-menu.main-menu ul {
  padding-left: 148px;
}
.sidebar-main-menu.main-menu ul li a {
  display: block;
  line-height: 1;
  color: #353535;
  font-size: 18px;
  letter-spacing: 1px;
}
.sidebar-main-menu.main-menu ul li ul {
  padding: 14px 20px 15px;
}
.sidebar-cart-contact {
  padding-top: 52px;
  text-align: center;
}
.sidebar-cart-contact .header-search-cart {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.sidebar-contact > p {
  color: #727272;
  font-size: 15px;
  font-weight: bold;
  margin: 6px 0 0;
}
.sidebar-style-all {
  padding-top: 80px;
}
.sidebar-main-menu.main-menu {
  padding-top: 57px;
}
.sidebar-main-menu.main-menu ul li:last-child {
  padding: 0 0 0px;
}
.sidebar-main-menu.main-menu nav > ul > li > ul > li {
  margin: 0 0 10px;
  padding: 0;
}
.sidebar-main-menu.main-menu nav > ul > li > ul > li > a {
  font-size: 14px;
  line-height: inherit;
  padding: 0;
}

.sidebar-main-menu.main-menu ul li .mega-dropdown {
  padding: 14px 0 15px;
}
.sidebar-main-menu.main-menu ul li a span {
  float: right;
  font-size: 13px;
  margin-top: 3px;
  padding-right: 147px;
}

/* sidebar-wrapper hm-toy */

.toys-header {
  display: none;
  padding: 0px 15px;
}
.section-title-2 p {
  margin: 0 auto;
  width: 53%;
}
.single-content-left {
  padding-left: 100px;
}
.single-slider-hmtoy {
  height: 100vh;
}
.slider-content-style-toy h2 {
  color: #353535;
  font-family: 'Fredoka One', cursive;
  font-size: 72px;
}
.slider-content-style-toy h3 {
  color: #353535;
  font-size: 20px;
  font-family: 'Fredoka One', cursive;
  margin: 15px 0 27px;
}
.slider-btn-toy {
  background-color: #333;
  border-radius: 50px;
  color: #ffffff;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  padding: 17px 38px 19px;
  position: relative;
  text-transform: uppercase;
}

.slider-btn-toy:after {
  border: 1px dashed #fff;
  border-radius: 50px;
  bottom: 4px;
  content: "";
  left: 6px;
  position: absolute;
  right: 6px;
  top: 4px;
}
.btn-hover.slider-btn-toy:before {
  border-radius: 50px;
}
.toy-banner-shop {
  margin-top: 4px;
  padding: 100px 100px 0;
}
.banner-area {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.single-banner5 > img {
  width: 100%;
}
.single-banner5 {
  position: relative;
}
.banner-content-5 {
  left: 0;
  padding: 30px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.banner-content-5 > h3 {
  color: #494949;
  font-family: "Fredoka One",cursive;
  font-size: 24px;
  margin: 0;
}
.banner-content-5 > h4 {
  color: #494949;
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0 16px;
}
.banner-content-5 > a {
  border: 1px dashed #494949;
  border-radius: 50px;
  color: #494949;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1;
  padding: 8px 16px;
  text-transform: uppercase;
}
.banner-content-5 > a:hover {
  border: 1px dashed #ee3333;
  color: #ee3333;
}
.single-banner5.toy-mrg {
  margin: 0 20px;
}
.load-more.text-center > a i {
  color: #4f4f4f;
  font-size: 16px;
  margin-right: 6px;
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
}
.load-more-style {
  border: 1px solid #4f4f4f;
  color: #505050;
  display: inline-block;
  font-weight: 600;
  line-height: 1;
  padding: 15px 37px;
  text-transform: uppercase;
  position: relative;
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
}
.load-more-style.btn-hover {
  z-index: 5;
}
.load-more-style.btn-hover:hover {
  color: white;
  border: 1px solid #ee3333;
}
.load-more.text-center > a.load-more-style:hover i {
  color: #fff;
}
.toy-product .row {
  margin-left: -10px;
  margin-right: -10px;
}
.toy-product .row div[class^="col-"] {
  padding-left: 10px;
  padding-right: 10px;
}
.load-more {
  margin-top: 11px;
}
.footer-plr {
  padding: 0 100px;
}

/*------ 7. Home food & drink -------*/

/* home food slider */
.slider-content-style-6 h2 {
  color: #434242;
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
}
.slider-content-style-6 h3 {
  color: #434242;
  font-family: "Playfair Display",serif;
  font-size: 24px;
  font-weight: 700;
  margin: 17px 0 4px;
}
/* home-food banner */
.single-banner6 a img {
  width: 100%;
}
.banner-content-6 > h3 {
  color: #ffffff;
  font-family: "Pacifico",cursive;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  margin: 0;
}
.single-banner6 {
  position: relative;
}
.banner-content-6 {
  background-color: rgba(238, 51, 51, 0.75);
  margin-right: 30px;
  padding: 54px 20px 52px;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.banner-content-6 > h2 {
  color: #ffffff;
  font-family: "Pacifico",cursive;
  font-size: 48px;
  margin: 1px 0 18px;
}


/* home-food product */

.single-product-food {
  position: relative;
  -webkit-transition: all .3s ease 0s;
  transition: all .3s ease 0s;
}

.product-food-img > span {
  background-color: #626262;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  right: 20px;
  letter-spacing: 1px;
  line-height: 1;
  padding: 4px 11px 5px;
  position: absolute;
  text-transform: uppercase;
  top: 20px;
}

.food-title > h4 {
  color: #5d5d5d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 7px;
}
.food-title > span {
  color: #ee3333;
  font-weight: 600;
}
.food-action > a {
  color: #474747;
  line-height: 1;
  padding: 0 18px;
  position: relative;
}
.food-action > a:hover {
  color: #ee3333;
}
.food-action > a.action-eye {
  font-size: 27px;
  top: 3px;
}
.food-action > a.action-same {
  font-size: 19px;
}
.food-action {
  border: 1px solid #ccc;
  border-radius: 20px;
  display: inline-block;
  margin-top: 24px;
  padding: 3px 6px 7px;
}
.food-title-action {
  bottom: 40px;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
}
.food-style .owl-stage , .food-new-collections .owl-stage {
  padding-bottom: 10px;
  padding-top: 10px;
}

.food-action > a:before {
  background: #cccccc none repeat scroll 0 0;
  content: "";
  height: 21px;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  width: 1px;
}
.food-action > a:last-child:before {
  content: none;
}
.food-menu {
  border-bottom: 1px solid #dadada;
}
.product-tab-list.food-menu a {
  border-bottom: 3px solid transparent;
  padding-bottom: 9px;
}
.product-tab-list.food-menu a.active , .product-tab-list.food-menu a:hover {
  border-bottom: 3px solid #ee3333;
}

.product-tab-list.food-menu a h4 {
  color: #000000;
  font-family: playfair display;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}
.product-tab-list.food-menu a {
  margin: 0 25px;
}
.single-product-food:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
/* home-food product */
.food-long-banner-img {
  position: relative;
}
.food-long-banner-img > img {
  width: 100%;
}
/* home-food footer */
.food-foter {
  padding: 0 155px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.food-footer-title {
  color: #313131;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 9px;
}
.food-single-about > p {
  color: #414141;
  line-height: 27px;
  margin: 0;
}
.food-single-about > span {
  color: #575757;
  display: block;
  font-weight: 600;
  margin: 12px 0 5px;
}
.food-single-about > a {
  color: #575757;
  font-weight: 600;
}
.food-single-about > a:hover , .footer-social li a:hover {
  color: #ee3333;
}
.food-single-newsletter > p {
  color: #414141;
  margin: 0 0 16px;
}
/* home-food footer-subscribe */
.subscribe-form form {
  position: relative;
}
.subscribe-form form input {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #a3a3a3;
  color: #919191;
  height: 43px;
  padding-left: 20px;
}
.subscribe-form form input::-moz-placeholder {
  color: #919191;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.subscribe-form form input::-webkit-placeholder {
  color: #919191;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.mc-form .mc-news {
  display: none;
  position: absolute;
}
.mc-form .clear {
  background: rgba(0, 0, 0, 0) url("../../assets/img/icon-img/8.png") no-repeat scroll right 0 center;
  bottom: 0;
  display: inline-block;
  position: absolute;
  right: 20px;
}
.subscribe-form .clear input {
  border: medium none;
  padding: 0;
  text-indent: -99999px;
  width: 37px;
}
.mc-form .clear:before {
  background: #a3a3a3 none repeat scroll 0 0;
  content: "";
  height: 24px;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  width: 1px;
}
.food-single-social {
  padding-top: 8px;
}
.food-single-newsletter {
  margin-top: 12px;
}

/*------- 8. Breadcrumb style -------------*/
.shop-listview-sidebar {
  padding: 0 145px;
}
.breadcrumb-content h2 {
  color: #585858;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
  text-transform: capitalize;
}
.breadcrumb-content li {
  color: #585858;
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
}
.breadcrumb-content li a {
  color: #7c7c7c;
  position: relative;
  padding-right: 18px;
}
.breadcrumb-content li a:hover {
  color: #ee3333;
}
.breadcrumb-content li a:after {
  background-color: #7c7c7c;
  content: "";
  font-size: 8px;
  height: 1px;
  position: absolute;
  right: 0;
  top: 10px;
  -webkit-transform: rotate(-63deg);
      -ms-transform: rotate(-63deg);
          transform: rotate(-63deg);
  width: 13px;
}

/*---------- 9. About us ----------*/

.about-story-img {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding-left: 35px;
}
.story-title {
  color: #585858;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
}
.story-subtitle {
  color: #8f8f8f;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 27px;
}
.story-paragraph {
  color: #8f8f8f;
  margin-bottom: 24px;
}
.story-paragraph:last-child {
  margin-bottom: 0px;
}
.about-story-img > img {
  width: 100%;
}
.about-story-img2 {
  margin-left: 23px;
}
.about-story {
  padding-right: 28px;
}
.section-title-others > h2 {
  color: #585858;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 12px;
}
.section-title-others > p {
  color: #8f8f8f;
  letter-spacing: 0.6px;
  margin: 0 auto;
  width: 50%;
}
.about-single-service > h3 {
  color: #454343;
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 16px 0;
  text-transform: uppercase;
}
.about-single-service > p {
  color: #8f8f8f;
}
.video-banner {
  position: relative;
}
.video-banner > img {
  width: 100%;
}
.video-popup {
  background-color: rgba(255, 255, 255, 0.7);
  color: #353030;
  display: inline-block;
  font-size: 68px;
  height: 70px;
  left: 0;
  line-height: 69px;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  width: 115px;
}
.mfp-bg {
  z-index: 9999999;
}
.mfp-wrap {
  z-index: 99999999;
}




/*------------- 10. Shop grid view ----------*/

.shop-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.shop-found-selector {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.shop-filter-tab {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: -3px;
}
.shop-found > p {
  color: #6c6c6c;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
.shop-found > p span {
  color: #ff4136;
}
.shop-selector label {
  color: #6c6c6c;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
}
.shop-selector select {
  -moz-appearance: none;
  background: rgba(0, 0, 0, 0) url("../../assets/img/icon-img/12.png") no-repeat scroll right 0 center;
  border: medium none;
  box-shadow: none;
  color: #090909;
  font-size: 18px;
  height: inherit;
  line-height: 1;
  padding-left: 0;
  width: 113px;
  -webkit-appearance: none;
  -ms-appearance: none;
}
.shop-selector {
  margin-left: 63px;
  margin-top: -3px;
}
.shop-tab a {
  color: #6c6c6c;
  font-size: 31px;
  line-height: 1;
  margin-left: 30px;
}
.shop-tab a.active , .shop-tab a:hover {
  color: #ff4136;
}
.shop-tab a:first-child {
  margin-left: 0px;
}
.shop-filter > a {
  color: #6c6c6c;
  font-size: 18px;
  font-weight: 600;
}
.shop-filter > a:hover {
  color: #ee3333;
}
.shop-filter {
  margin-right: 78px;
}
.shop-filter i {
  margin-left: 11px;
}
.shop-product-content .load-more-style {
  border: 1px solid #c5c5c5;
  color: #737373;
}
.shop-page-wrapper {
  padding: 100px 145px 40px;
}
.shop-page-wrapper.padding-filter , .shop-page-wrapper.shop-wrapper-pd {
  padding: 100px 145px 60px;
}

.shop-page-wrapper .container {
  position: relative;
}
.shop-page-wrapper .container-fluid {
  padding-left: 12.5px;
  padding-right: 12.5px;
  position: relative;
}
.row.custom-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-left: -12.5px;
  margin-right: -12.5px;
}
.custom-col-style {
  padding-left: 12.5px;
  padding-right: 12.5px;
}
.custom-col-5 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 20%;
      -ms-flex: 0 0 20%;
          flex: 0 0 20%;
  max-width: 20%;
}
.custom-col-3 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 33.333%;
      -ms-flex: 0 0 33.333%;
          flex: 0 0 33.333%;
  max-width: 33.333%;
}
.custom-col-4 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 25%;
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
  max-width: 25%;
}

/*----------- 11. Shop sidebar ----------*/

.shop-sidebar {
  float: left;
  width: 20%;
  padding-right: 50px;
}
.shop-product-wrapper {
  width: 80%;
  float: left;
  padding-left: 50px;
}
.shop-page-wrapper {
  overflow: hidden;
}
.sidebar-title {
  color: #6c6c6c;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}
.sidebar-search form {
  position: relative;
}
.sidebar-search form input {
  background: #f1f1f1 none repeat scroll 0 0;
  border: medium none;
  box-shadow: none;
  color: #8e8d8d;
  font-size: 13px;
  padding-left: 15px;
  padding-right: 55px;
}
.sidebar-search form input::-moz-placeholder {
  color: #8e8d8d;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.sidebar-search form input::-webkit-placeholder {
  color: #8e8d8d;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.sidebar-search form > button {
  background-color: #dedede;
  border: medium none;
  color: #ff4136;
  cursor: pointer;
  font-size: 24px;
  height: 45px;
  line-height: 45px;
  padding: 0 16px;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.sidebar-search form > button:hover {
  background-color: #ff4136;
  color: #fff;
}
.price_filter .ui-slider.ui-slider-horizontal.ui-widget.ui-widget-content.ui-corner-all {
  background: #ebebeb none repeat scroll 0 0;
  border: medium none;
  border-radius: 5px;
  color: #222222;
  height: 3px;
  margin-bottom: 21px;
  margin-left: auto;
}
.price_filter .ui-slider-range {
  background: #b7b7b7 none repeat scroll 0 0;
  border-radius: 0;
  height: 100%;
  top: 0;
}
.price_filter .ui-slider-handle.ui-state-default.ui-corner-all {
  background: #b7b7b7 none repeat scroll 0 0;
  border: medium none;
  border-radius: 0%;
  height: 15px;
  width: 4px;
}
.ui-slider-horizontal .ui-slider-handle {
  margin-left: 0;
  top: -6px;
}
.price_slider_amount {
  display: block;
  overflow: hidden;
}
.label-input {
  display: inline-block;
  float: left;
}
.label-input label {
  color: #575757;
  display: inline-block;
  float: left;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
}
.label-input input {
  background: transparent none repeat scroll 0 0;
  border: medium none;
  box-shadow: none;
  color: #575757;
  font-size: 14px;
  font-weight: 600;
  height: inherit;
  padding-left: 5px;
  width: 99px;
}
.price_slider_amount > button {
  background-color: transparent;
  border: medium none;
  color: #575757;
  display: inline-block;
  float: right;
  font-weight: 600;
  line-height: 1;
  padding: 4px 0 0;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.sidebar-categories li a {
  color: #888888;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
}

.sidebar-categories li a:hover {
  color: #ee3333;
}

.sidebar-categories li a span {
  float: right;
}

.sidebar-categories li {
  margin-bottom: 16px;
}

.sidebar-categories li:last-child {
  margin-bottom: 0px;
}

.product-color > ul li {
  border-radius: 50px;
  cursor: pointer;
  display: block;
  float: left;
  height: 22px;
  margin-right: 20px;
  text-indent: -9999px;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  width: 22px;
}
.product-color > ul li:last-child {
  margin-right: 0px;
}
.product-color > ul li.red {
  background: #ff4136 none repeat scroll 0 0;
}
.product-color > ul li.pink {
  background: #ff01f0 none repeat scroll 0 0;
}
.product-color > ul li.blue {
  background: #3649ff none repeat scroll 0 0;
}
.product-color > ul li.sky {
  background: #00c0ff none repeat scroll 0 0;
}
.product-color > ul li.green {
  background: #00ffae none repeat scroll 0 0;
}
.product-color > ul li.purple {
  background: #8a00ff none repeat scroll 0 0;
}
.sidebar-widget {
  display: block;
}

.sidebar-widget.sidebar-overflow {
  overflow: hidden;
}
.product-size li {
  display: inline-block;
  margin-right: 16px;
}
.product-size li a {
  color: #888888;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
}
.product-size li a:hover {
  color: #ee3333;
}
.single-top-rated {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.top-rated-text > h4 {
  color: #6c6c6c;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}
.top-rated-rating li {
  display: inline-block;
}
.top-rated-rating li {
  display: inline-block;
  margin-right: 5px;
}
.top-rated-rating li i {
  color: #000000;
  font-size: 16px;
}

.top-rated-rating li i.reting-color {
  color: #ee3333;
  font-size: 16px;
}
.top-rated-text > span {
  color: #8b8b8b;
  font-weight: 600;
}
.top-rated-text {
  margin-left: 20px;
}
.top-rated-rating {
  line-height: 1;
  margin: 9px 0 10px;
}
.sidebar-load {
  padding-top: 7px;
}

/*-------- 12. Shop list -----------*/

.single-product-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-content-list {
  margin-left: 30px;
}
.product-list-info > h4 {
  color: #191919;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
.product-list-info > span {
  color: #b5b5b5;
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0 16px;
}
.product-list-info > p {
  color: #818181;
  font-size: 16px;
  line-height: 30px;
  margin: 0;
}
.list-img-width {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 320px;
      -ms-flex: 0 0 320px;
          flex: 0 0 320px;
}
.sidebar-list-img-width {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 470px;
      -ms-flex: 0 0 470px;
          flex: 0 0 470px;
}
.product-list-cart-wishlist {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 42px;
}
.list-btn-style {
  border: 1px solid #dcdcdc;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 1;
  padding: 17px 32px;
  text-transform: uppercase;
}
.list-btn-style:hover {
  border: 1px solid #ee3333;
}

.list-btn-wishlist {
  border: 1px solid #dcdcdc;
  color: #727272;
  display: inline-block;
  font-size: 22px;
  line-height: 1;
  padding: 13px 18px;
}

.list-btn-wishlist:hover {
  border: 1px solid transparent;
}
.product-list-cart {
  margin-right: 30px;
}
.load-more.list-mrg {
  margin: 0;
}
.res-class .shop-filters-right.is-visible .col-xl-6 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}
.padding-filter .shop-filters-right.is-visible .col-xl-6 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}

/* container product list */

.container-product-list .product-content-list {
  margin-left: 0px;
}

/*------------ 13. breadcrumb style 2 -----------*/

.breadcrumb-content-2 > ul li {
  color: #929191;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  padding-right: 27px;
  position: relative;
  text-transform: uppercase;
}
.breadcrumb-content-2 > ul li a {
  color: #929191;
}
.breadcrumb-content-2 > ul li a:hover {
  color: #ff4136;
}
.breadcrumb-content-2 ul li:after {
  background-color: #929191;
  content: "";
  font-size: 8px;
  height: 11px;
  margin-left: 11px;
  position: absolute;
  right: 11px;
  top: 6px;
  -webkit-transform: rotate(33deg);
      -ms-transform: rotate(33deg);
          transform: rotate(33deg);
  width: 2px;
}
.breadcrumb-content-2 ul li:last-child:after {
  content: inherit;
}

/*---------- 14. product details --------*/

.product-details-small a:last-child {
  margin-right: 0px;
}
.product-details-large .easyzoom > a img {
  width: 100%;
}
.pro-stick .easyzoom.easyzoom--overlay > a img , .single-details-gallery .easyzoom.easyzoom--overlay > a img , .details-9 .easyzoom.easyzoom--overlay > a img {
  width: 100%;
}
.product-details-small a > img {
  width: 100%;
}
.product-details-small.main-product-details a > img {
  width: 140px;
}
.product-details-small.main-product-details a {
  margin-bottom: 10px;
}
.product-details-small > a.active {
  position: relative;
}
.product-details-small > a.active:before {
  background: rgba(0, 0, 0, .15) none repeat scroll 0 0;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: all 400ms ease-in 0s;
  transition: all 400ms ease-in 0s;
  z-index: 10;
}
.product-details-content > h3 {
  color: #707070;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 13px;
}
.details-price > span {
  color: #ee3333;
  font-size: 24px;
  font-weight: 600;
}
.product-details-content .rating-number {
  margin-bottom: 5px;
}
.product-details-content > p {
  color: #545454;
  margin-bottom: 33px;
}
.details-price {
  margin-bottom: 25px;
}
.product-cat-tag li , .product-share li {
  display: inline-block;
  margin-right: 14px;
}
.product-cat-tag li a {
  text-transform: capitalize;
}
.product-cat-tag li.categories-title {
  text-transform: uppercase;
  font-size: 15px;
  color: #6e6e6e;
}
.product-share > ul li {
  margin-right: 15px;
  display: inline-block;
  margin-right: 14px;
}
.product-share > ul li a {
  border: 1px solid #3f3f3f;
  border-radius: 50px;
  color: #585858;
  display: inline-block;
  height: 30px;
  text-align: center;
  width: 30px;
}
.product-share > ul li a:hover {
  border: 1px solid #ee3333;
  background-color: #ee3333;
  color: #fff;
}
.product-share > ul li a i {
  line-height: 28px;
}
.product-categories.product-cat-tag {
  margin: 34px 0 15px;
}
.product-tags.product-cat-tag {
  margin-bottom: 22px;
}
.description-review-title {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-bottom: 44px;
}
.description-review-title a {
  color: #e0e0e0;
  font-size: 30px;
  font-weight: bold;
  margin: 0 20px;
}
.description-review-title a.active {
  color: #333333;
}
.description-review-text .tab-pane p {
  color: #545454;
  font-size: 15px;
  margin: 0 auto;
  width: 61%;
}
#pro-review a {
  background-color: #282828;
  border: 0 none;
  color: #fff;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  padding: 10px 15px;
  text-shadow: none;
  text-transform: uppercase;
}

/*-------- 15. Product details 2 -------*/

.product-details-2 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 125px;
      -ms-flex: 0 0 125px;
          flex: 0 0 125px;
}
.product-details-tab.product-details-tab2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-details-btn > a {
  color: #929191;
  font-size: 20px;
  margin-left: 10px;
}
.product-details-btn > a.active , .product-details-btn > a:hover {
  color: #3a3a3a;
  margin-left: 10px;
}
.product-details-btn {
  margin-top: -128px;
  position: absolute;
  right: 0;
}
.product-details {
  position: relative;
}

/*----------- 16. product details 4 ---------*/

.product-details-4 .easyzoom a img {
  width: 100%;
}

.single-bundle-img a img {
  width: 100%;
}

.details-title {
  color: #707070;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 19px;
}
.product-color-style2 > ul li {
  border-radius: 50px;
  cursor: pointer;
  display: block;
  float: left;
  height: 19px;
  margin-right: 10px;
  position: relative;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  width: 19px;
}
.product-color-style2 > ul li.orange {
  background: #ff5d42 none repeat scroll 0 0;
  position: relative;
}
.product-color-style2 > ul li.orange:before {
  color: #fff;
  content: "";
  font-family: "Ionicons";
  font-size: 16px;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  text-indent: inherit;
  top: -2px;
  z-index: 99;
}
.product-color-style2 > ul li.blue2 {
  background: #425dff none repeat scroll 0 0;
}

.product-color-style2 > ul li.pink {
  background: #fd42ff none repeat scroll 0 0;
}

.product-color-style2 > ul li.yellow {
  background: #ffd542 none repeat scroll 0 0;
}
.product-color-2 {
  margin-bottom: 37px;
  overflow: hidden;
}
.product-size-style2 li {
  display: inline-block;
  margin-right: 12px;
}
.product-size-style2 li a {
  color: #828282;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
}
.product-size-style2 li a:hover {
  color: #ee3333;
}
.product-size-2 {
  margin-bottom: 30px;
}
.bundle-area > h3 {
  color: #707070;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}
.bundle-area > p {
  color: #545454;
  margin: 0;
}
.bundle-img {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 34px 0 35px;
}
.single-bundle-img {
  margin-right: 11px;
  position: relative;
  cursor: pointer;
}
.bundle-img > a:last-child {
  margin-right: 0px;
}
.single-bundle-img:before {
  background: rgba(0, 0, 0, 0.15) none repeat scroll 0 0;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: all 400ms ease-in 0s;
  transition: all 400ms ease-in 0s;
  pointer-events: none;
}
.single-bundle-img:hover:before {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.bundle-price ul li {
  color: #525252;
  font-size: 14px;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}
.bundle-price ul li:last-child {
  margin-bottom: 0px;
}
.bundle-price ul li:before {
  color: #727272;
  content: "";
  font-family: "Ionicons";
  font-size: 14px;
  left: 0;
  position: absolute;
  text-indent: inherit;
  top: 0;
}
.bundle-price ul li span {
  position: relative;
}
.bundle-price ul li span:before {
  background: #7d7d7d none repeat scroll 0 0;
  bottom: 9px;
  content: "";
  height: 1px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 32px;
}
.bundle-result > h4 {
  color: #525252;
  font-size: 16px;
  font-weight: 600;
}
.bundle-result > h4 span {
  color: #747373;
  font-weight: 400;
}
.bundle-result > h4 span .bundle-cross {
  position: relative;
}
.bundle-result > h4 span .bundle-cross:before {
  background: #9f9e9e none repeat scroll 0 0;
  bottom: 10px;
  content: "";
  height: 1px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 45px;
}
a.bundle-btn {
  background-color: #ee3333;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 1;
  padding: 17px 25px;
  text-transform: uppercase;
  position: relative;
  z-index: 9;
}
.btn-hover-black:before {
  background: #333 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transform-origin: 0 50% 0;
      -ms-transform-origin: 0 50% 0;
          transform-origin: 0 50% 0;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
  z-index: -1;
}
.btn-hover-black:hover:before {
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
}
.btn-hover-black:hover {
  color: white;
}
.bundle-social li {
  display: inline-block;
  margin-right: 30px;
}
.bundle-social li a {
  color: #383838;
  font-size: 18px;
  line-height: 1;
}
.bundle-social li a:hover {
  color: #ee3333;
}
.bundle-result {
  margin-top: 32px;
}
.bundle-cart {
  margin: 37px 0 38px;
}
.product-details-4 > img {
  width: 100%;
}
.product-details-5 > img {
  padding-top: 134px;
  width: 100%;
}
.scroll-single-product > img {
  width: 100%;
}
.inner-wrapper-sticky > h3 {
  color: #707070;
  font-size: 24px;
  font-weight: 600;
}

/*-------- 17. Product details 7  -------*/

.product-details7-social li {
  display: inline-block;
  margin-right: 27px;
}
.product-details7-social li a {
  color: #383838;
  font-size: 18px;
}
.product-details7-social li a:hover {
  color: #ee3333;
}
.sidebar-details7 .quickview-btn-cart {
  margin: 0 0 0 30px;
}
.sidebar-details7 .quickview-btn-cart > a {
  padding: 17px 34px;
}
.sidebar-details7 .details-title {
  margin-top: 0;
}
.scroll-single-product {
  position: relative;
}
.scroll-single-product > a {
  background-color: #fff;
  bottom: 30px;
  color: #ff4136 !important;
  display: inline-block;
  font-size: 22px;
  padding: 10px 19px;
  position: absolute;
  right: 30px;
  text-align: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(0);
      -ms-transform: scale(0);
          transform: scale(0);
}
.scroll-single-product > a:hover {
  background-color: #ff4136;
  color: #fff !important;
}
.scroll-single-product:hover a {
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
}

/*-------- 18. Product details 8 --------- */

.single-details-gallery {
  width: 280px;
  float: left;
}
.single-details-gallery > img {
  width: 100%;
}
.details-9 > img {
  width: 100%;
}
.product-details-9 .product-details-btn {
  margin-top: -98px;
}

/*------- 19. Product details 9  ----------*/

.details-9-content .product-color-style2 > ul li {
  display: inline-block;
  float: inherit;
}

.details-9-content .rating-number , .details-9-content .quickview-plus-minus {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.details-9-content .product-details-content > p {
  margin: 0 auto;
  width: 50%;
}

/*----------- 20. Shop filters  ----------*/

.shop-filters-left {
  float: left;
  margin-left: -100px;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  padding-right: 100px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  max-width: 420px;
  width: 100%;
  z-index: -99999;
  position: absolute;
  top: 0;
}
.shop-filters-left .shop-sidebar {
  width: 100%;
  padding-right: 0;
}
.shop-filters-left.is-visible {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
  z-index: 9;
  margin-left: 0px;
  z-index: 99;
}
.shop-filters-right {
  width: 100%;
  padding-left: 0;
  -webkit-transition: all .5s ease 0s;
  transition: all .5s ease 0s;
  overflow: hidden;
}
.shop-filters-right.is-visible {
  padding-left: 420px;
}
.filter-container .shop-filters-left {
  padding-right: 50px;
  max-width: 340px;
}
.filter-container .shop-filters-right.is-visible {
  padding-left: 340px;
}
.hidden-items .shop-filters-right.is-visible .custom-col-5 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 33.333%;
      -ms-flex: 0 0 33.333%;
          flex: 0 0 33.333%;
  max-width: 33.333%;
}
.hidden-items .shop-filters-right.is-visible .col-md-6 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}

/*-------- 21. Shopping cart ----------*/


h1.cart-heading {
  color: #252525;
  font-size: 25px;
  margin-bottom: 25px;
  text-transform: uppercase;
}
.cart-title-area {
  padding-top: 30px;
}
.car-header-title h2 {
  font-size: 20px;
  margin: 0;
  text-transform: uppercase;
}
.table-content table {
  background: #fff none repeat scroll 0 0;
  border-color: #e5e5e5;
  border-radius: 0;
  border-style: solid;
  border-width: 1px 0 0 1px;
  margin: 0 0 50px;
  text-align: center;
  width: 100%;
  border: none;
}
.wishlist .table-content table {
  margin: 0 0 0px;
}
.table-content.wish table {
  margin: 0 0 0px;
}
.table-content table th {
  border-top: medium none;
  color: #555;
  font-size: 16px;
  font-weight: normal;
  padding: 15px 10px 12px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
}
.table-content table td {
  border-top: medium none;
  padding: 40px 10px;
  vertical-align: middle;
  font-size: 13px;
}
.table-content table td input {
  background: #e5e5e5 none repeat scroll 0 0;
  border: medium none;
  border-radius: 3px;
  color: #6f6f6f;
  font-size: 15px;
  font-weight: normal;
  height: 40px;
  padding: 0 5px 0 10px;
  width: 60px;
}
.table-content table td.product-subtotal {
  color: #555;
  font-size: 15px;
  width: 120px;
}
.table-content table td.product-name a {
  color: #6f6f6f;
  font-size: 15px;
  margin-left: 10px;
}
.table-content table td.product-name a:hover {
  color: #ee3333;
}
.table-content table td.product-name {
  width: 270px;
}
.table-content table td.product-thumbnail {
  width: 130px;
}
.table-content table td.product-remove i {
  color: #919191;
  display: inline-block;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 40px;
}
.table-content table .product-price .amount {
  color: #555;
  font-size: 15px;
}

.table-content table td.product-remove i:hover {
  color: #ee3333;
}
.table-content table td.product-quantity {
  width: 180px;
}
.table-content table td.product-remove {
  width: 150px;
}
.table-content table td.product-price {
  width: 130px;
}
thead {
  background-color: #f6f6f6;
}
.coupon input {
  background-color: transparent;
  border: 1px solid #ddd;
  color: #333;
  font-size: 13px;
  height: 42px;
  width: 120px;
}
.coupon2 input {
  width: inherit;
}
.coupon-all input.button {
  background-color: #333;
  border: 0 none;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  height: 42px;
  letter-spacing: 1px;
  line-height: 42px;
  padding: 0 25px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: inherit;
}
.coupon-all input.button:hover {
  background-color: #ee3333;
  border: medium none;
  color: #fff;
}
.coupon {
  float: left;
}
.coupon2 {
  float: right;
}
.cart-page-total span {
  float: right;
}
.cart-page-total > ul {
  border: 1px solid #ddd;
}
.cart-page-total li {
  border-bottom: 1px solid #ddd;
  color: #555;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 30px;
}
.cart-page-total li:last-child {
  border-bottom: none;
}
.cart-page-total {
  padding-top: 50px;
}
.cart-page-total > a {
  background-color: #333;
  border: 1px solid #333;
  color: #fff;
  display: inline-block;
  margin-top: 30px;
  padding: 9px 20px;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.cart-page-total > a:hover {
  background-color: #ee3333;
  color: #fff;
  border: 1px solid #ee3333;
}
.cart-page-total > h2 {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: capitalize;
}

/*-------- 22. Checkout page ----------*/

.coupon-accordion h3 {
  background-color: #f7f6f7;
  border-top: 3px solid #464646;
  color: #515151;
  font-size: 14px;
  font-weight: 400;
  list-style: outside none none !important;
  margin: 0 0 2em !important;
  padding: 1em 2em 1em 3.5em !important;
  position: relative;
  width: auto;
}
.coupon-accordion h3:before {
  color: #333;
  content: "";
  font-family: "Ionicons";
  display: inline-block;
  left: 1.5em;
  position: absolute;
  top: 1em;
}
.coupon-accordion span {
  cursor: pointer;
  color: #6f6f6f;
}
.coupon-accordion span:hover,
p.lost-password a:hover {
  color: #ee3333;
}
.coupon-content {
  border: 1px solid #e5e5e5;
  display: none;
  margin-bottom: 20px;
  padding: 20px;
}
.coupon-info p.coupon-text {
  margin-bottom: 15px;
}
.coupon-info p {
  margin-bottom: 0;
}
.coupon-info p.form-row-first label,
.coupon-info p.form-row-last label {
  display: block;
}
.coupon-info p.form-row-first label span.required,
.coupon-info p.form-row-last label span.required {
  color: red;
  font-weight: 700;
}
.coupon-info p.form-row-first input,
.coupon-info p.form-row-last input {
  border: 1px solid #e5e5e5;
  height: 36px;
  margin: 0 0 14px;
  max-width: 100%;
  padding: 0 0 0 10px;
  width: 370px;
  background-color: transparent;
}
.coupon-info p.form-row input[type="submit"]:hover,
p.checkout-coupon input[type="submit"]:hover {
  background: #ee3333 none repeat scroll 0 0;
}
.coupon-info p.form-row input[type="checkbox"] {
  height: inherit;
  position: relative;
  top: 2px;
  width: inherit;
}
.form-row > label {
  margin-top: 7px;
}
p.lost-password {
  margin-top: 15px;
}
p.lost-password a {
  color: #6f6f6f;
}
p.checkout-coupon input[type="text"] {
  background-color: transparent;
  border: 1px solid #ddd;
  height: 36px;
  padding-left: 10px;
  width: 170px;
}
p.checkout-coupon input[type="submit"] {
  background: #333 none repeat scroll 0 0;
  border: medium none;
  border-radius: 0;
  color: #fff;
  height: 36px;
  margin-left: 6px;
  padding: 5px 10px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: inherit;
}
.coupon-checkout-content {
  margin-bottom: 30px;
  display: none;
}
.checkbox-form h3 {
  border-bottom: 1px solid #e5e5e5;
  font-size: 25px;
  margin: 0 0 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  width: 100%;
}
.country-select {
  margin-bottom: 30px;
  position: relative;
}

.country-select label,
.checkout-form-list label {
  color: #333;
  margin: 0 0 5px;
  display: block;
}

.country-select label span.required,
.checkout-form-list label span.required {
  color: red;
}

.country-select select {
  -moz-appearance: none;
  border: 1px solid #ddd;
  height: 32px;
  padding-left: 10px;
  width: 100%;
  background-color: transparent;
}

.country-select:before {
  content: "";
  font-family: "Ionicons";
  display: inline-block;
  font-size: 20px;
  position: absolute;
  right: 12px;
  top: 27px;
}

.checkout-form-list {
  margin-bottom: 30px;
}
.checkout-form-list label {
  color: #333;
}
.checkout-form-list input[type=text],
.checkout-form-list input[type=password],
.checkout-form-list input[type=email] {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  height: 42px;
  width: 100%;
  padding: 0 0 0 10px;
}
.checkout-form-list input[type="checkbox"] {
  display: inline-block;
  height: inherit;
  margin-right: 10px;
  position: relative;
  top: 2px;
  width: inherit;
}
.ship-different-title input {
  height: inherit;
  line-height: normal;
  margin: 4px 0 0;
  position: relative;
  top: 1px;
  width: 30px;
}
.create-acc label {
  color: #333;
  display: inline-block;
}
.create-account {
  display: none;
}
.ship-different-title h3 label {
  display: inline-block;
  margin-right: 20px;
  font-size: 25px;
  color: #363636;
}
.order-notes textarea {
  background-color: transparent;
  border: 1px solid #ddd;
  height: 90px;
  padding: 15px;
  width: 100%;
}
#ship-box-info {
  display: none;
}
.your-order {
  background: #f2f2f2 none repeat scroll 0 0;
  padding: 30px 40px 45px;
}
.your-order h3 {
  border-bottom: 1px solid #d8d8d8;
  font-size: 25px;
  margin: 0 0 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  width: 100%;
}
.your-order-table table {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  width: 100%;
}
.your-order-table table th,
.your-order-table table td {
  border-bottom: 1px solid #d8d8d8;
  border-right: medium none;
  font-size: 14px;
  padding: 15px 0;
  text-align: center;
}
.your-order-table table th {
  border-top: medium none;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  width: 250px;
}
.your-order-table table .shipping ul li input {
  position: relative;
  top: 2px;
}
.your-order-table table .shipping th {
  vertical-align: top;
}
.your-order-table table .order-total th {
  border-bottom: medium none;
  font-size: 18px;
}
.your-order-table table .order-total td {
  border-bottom: medium none;
}
.your-order-table table tr.cart_item:hover {
  background: #F9F9F9;
}
.your-order-table table tr.order-total td span {
  color: #464646;
  font-size: 20px;
}
.payment-method {
  margin-top: 40px;
}
.payment-accordion h3 {
  border-bottom: 0 none;
  margin-bottom: 10px;
  padding-bottom: 0;
}
.payment-accordion h3 a {
  color: #6f6f6f;
  font-size: 14px;
  padding-left: 25px;
  position: relative;
  text-transform: capitalize;
  text-decoration: none;
}
.payment-content p {
  font-size: 13px;
}
.payment-accordion img {
  height: 60px;
  margin-left: 15px;
}
.order-button-payment input {
  background: #464646 none repeat scroll 0 0;
  border: medium none;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  height: 50px;
  margin: 20px 0 0;
  padding: 0;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
}
.order-button-payment input:hover {
  background: #ee3333;
  border: 1px solid #ee3333;
  color: #fff;
}
.coupon-info p.form-row input[type="submit"] {
  background: #252525 none repeat scroll 0 0;
  border: medium none;
  border-radius: 0;
  box-shadow: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  float: left;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
  margin-right: 15px;
  padding: 0 30px;
  text-shadow: none;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  white-space: nowrap;
  width: inherit;
}
.mrg-nn {
  margin-bottom: 0;
}
h5.panel-title {
  color: #444;
  font-weight: 600;
}
.panel-body > p {
  color: #666;
}
.panel.panel-default {
  margin-bottom: 20px;
}


/*--------- 23. Login page ---------*/
.login-form-container {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #ddd;
  padding: 60px 40px;
  text-align: left;
}
.login-text {
  margin-bottom: 30px;
  text-align: center;
}
.login-text h2 {
  color: #444;
  font-size: 30px;
  margin-bottom: 5px;
  text-transform: capitalize;
}
.login-text span {
  font-size: 15px;
}
.login-form-container input {
  background: #ffffff none repeat scroll 0 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: none;
  color: #999;
  font-size: 14px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
.login-form-container input::-moz-placeholder {
  color: #999;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.login-toggle-btn {
  padding-top: 10px;
}
.login-form-container input[type="checkbox"] {
  height: 15px;
  margin: 0;
  position: relative;
  top: 1px;
  width: 17px;
}
.login-form-container label {
  color: #777;
  font-size: 15px;
  font-weight: 400;
}
.login-toggle-btn > a {
  color: #777;
  float: right;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.login-toggle-btn > a:hover {
  color: #000;
}
.button-box .default-btn {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #ddd;
  color: #777;
  font-size: 14px;
  line-height: 1;
  margin-top: 25px;
  padding: 12px 36px 10px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.button-box .default-btn:hover {
  background-color: #ee3333;
  border: 1px solid #ee3333;
  color: #fff;
}

/*------- 24. Blog sidebar ---------*/

.blog-tags-style li {
  display: inline-block;
  margin: 0 5px 10px 0;
}
.blog-tags-style li a {
  border: 1px solid #cbcbcb;
  color: #232323;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  padding: 13px 19px;
  text-align: center;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.blog-tags-style li a:hover {
  color: #fff;
    background-color: #ee3333;
}

.sidebar-img-content {
  background: #f6f6f6 none repeat scroll 0 0;
  padding: 20px;
}
.sidebar-img-content > p {
  color: #646464;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 21px;
}

.sidebar-img-content h4 {
  color: #2f2f2f;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0;
}
.sidebar-img-content > span {
  color: #2f2f2f;
  font-size: 12px;
  font-weight: 400;
}
.sidebar-widget.mb-50 > img {
  width: 100%;
}

.sidebar-img-social ul li {
  display: inline-block;
    margin-right: 20px;
}
.sidebar-img-social ul li > a {
  font-size: 16px;
}
.sidebar-img-social {
  margin-top: 10px;
}
.blog-sidebar .top-rated-text > h4 {
  font-size: 16px;
  line-height: 24px;
}
.blog-sidebar .top-rated-text > span {
  margin-bottom: 2px;
}
.social-network > a {
  background: #f6f6f6 none repeat scroll 0 0;
  color: #262626;
  display: inline-block;
  font-size: 20px;
  height: 60px;
  line-height: 59px;
  text-align: center;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: 80px;
}
.social-network > a:hover {
  background: #ee3333 none repeat scroll 0 0;
  color: #fff;
}
#Instafeed img {
  width: 107px;
}
#Instafeed > li {
  display: inline-block;
  padding: 2px;
}
.pagination-style ul li {
  display: inline-block;
  margin: 0 5px;
}
.pagination-style ul li a {
  border: 1px solid #bebebe;
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  text-align: center;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
  width: 40px;
    display: inline-block;
    line-height: 37px;
}

.pagination-style ul li:hover a, .pagination-style ul li.active a {
  background: #ee3333 none repeat scroll 0 0;
  border-color: #ee3333;
  color: #fff;
}




/*---------- 25. Blog details ----------*/

.blog-part > img {
  width: 100%;
}
.blog-details-style blockquote {
  background-color: #f6f6f6;
  border-left: 2px solid #ee3333;
  color: #666666;
  font-size: 14px;
  line-height: 26px;
  margin: 23px 0;
  padding: 14px 50px;
}
h3.leave-comment-text {
  border-bottom: 1px solid #ddd;
  display: block;
  font-size: 18px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  position: relative;
}
.blog-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.news-allreply img {
  border-radius: 100%;
  width: 100%;
}
.blog-title > h3 {
  font-size: 16px;
  margin-bottom: 6px;
  text-transform: capitalize;
  color: #333;
}
.blog-title > span {
  color: #666666;
  display: block;
  margin-bottom: 7px;
}
.blog-middle-mrg {
  margin: 32px 0 33px 90px;
}
.blog-img-details p {
  margin-bottom: 10px;
}
.blog-img-details > a {
  color: #333;
  font-weight: 600;
  text-transform: capitalize;
}
.blog-img-details > a:hover {
  color: #ee3333;
}
.blog-img-details {
  padding-left: 30px;
}
.leave-form input {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #ddd;
  color: #666666;
  font-size: 14px;
  height: 35px;
  margin-bottom: 30px;
  padding: 0 20px;
  width: 100%;
}
.text-leave textarea {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #ddd;
  color: #666666;
  font-size: 14px;
  height: 165px;
  margin-bottom: 30px;
  padding: 20px;
}
.text-leave button.submit {
  background-color: #333;
  border: medium none;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  padding: 16px 30px 15px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  z-index: 999;
}
.blog-info-details > h3 {
  font-size: 25px;
  margin-bottom: 20px;
  text-transform: capitalize;
}

/*----------- 26. Contact page -----------*/


.contact-title {
  color: #333;
  font-size: 20px;
  margin-bottom: 38px;
  text-transform: uppercase;
}
.single-contact-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.contact-info-icon i {
  border: 1px solid #cbcbcb;
  border-radius: 100%;
  color: #393939;
  display: block;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  width: 60px;
}
.contact-info-content p {
  color: #666666;
  font-size: 18px;
  line-height: 28px;
  margin: 0;
}
.contact-info-content {
  padding-left: 15px;
}
.contact-form-style input, .contact-form-style textarea {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: transparent none repeat scroll 0 0;
  border-color: currentcolor currentcolor #c1c1c1;
  -o-border-image: none;
     border-image: none;
  border-style: none none solid;
  border-width: 0 0 1px;
  color: #444;
  font-size: 14px;
  margin-bottom: 25px;
  padding: 0 20px 0 0;
}
.contact-form-style input::-moz-placeholder , .contact-form-style textarea::-moz-placeholder {
  color: #444;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.contact-form-style input::-webkit-placeholder , .contact-form-style textarea::-webkit-placeholder {
  color: #444;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.contact-form-style textarea {
  height: 150px;
}
.contact-form-style button.submit {
  background-color: #333;
  border: medium none;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  padding: 16px 30px 15px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  z-index: 999;
}

.contact-info {
  margin-bottom: 20px;
}
#hastech2 {
  height: 402px;
  width: 100%;
}
.contact-map {
  margin-top: 65px;
}

/*-------- 27. ScrollUp --------*/

#scrollUp {
  background: #ee3333 none repeat scroll 0 0;
  bottom: 85px;
  color: #ffffff;
  cursor: pointer;
  display: none;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  right: 12px;
  text-align: center;
  width: 38px;
  z-index: 9999;
}
#scrollUp:hover {
  background: #333 none repeat scroll 0 0;
  bottom: 85px;
  color: #ffffff;
  cursor: pointer;
  display: none;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  right: 12px;
  text-align: center;
  width: 38px;
  z-index: 9999;
}



/*----------------------------------------*/
/* Newsletter Popup CSS
/*----------------------------------------*/
.popup_wrapper {
    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;
    height: 100%;
    opacity: 0;
    position: fixed;
    transition: all 0.5s ease 0s;
    visibility: hidden;
    width: 100%;
    z-index: 9999999;
}

.test {
  background: #fff none repeat scroll 0 0;
  left: 0;
  margin: auto;
  padding: 80px 50px;
  position: absolute;
  right: 0;
  top: 200px;
  width: 55%;
}
.subscribe_area > p {
  margin-bottom: 30px;
}
.popup_off {
    color: #ffffff;
    cursor: pointer;
    display: block;
    text-align: center;
    text-decoration: none;
    background: #000;
    width: 53px;
    height: 25px;
    line-height: 27px;
    position: absolute;
    top: -25px;
    right: 0;
    font-size: 13px;
    font-weight: 700;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.popup_off:hover {
    background: #cc0000;
}

.subscribe-form-group {
    margin-top: 15px;
}

.subscribe-form-group input {
    background: #EBEBEB none repeat scroll 0% 0%;
    border: medium none;
    height: 40px;
    width: 50%;
    margin: 20px 0;
    padding: 0 15px;
}

input#newsletter-permission {
  height: inherit;
  width: 12px;
}

.subscribe-bottom input {
  background: #f2f2f2 none repeat scroll 0 0;
  border: medium none;
  box-shadow: none;
  color: #626262;
  font-size: 14px;
  height: 45px;
  padding-left: 25px;
  padding-right: 25px;
  width: 60%;
}
.clear-2 {
  margin-top: 20px;
}
.clear-2 input {
  background: #333 none repeat scroll 0 0;
  border: medium none;
  box-shadow: none;
  color: #fff;
  font-size: 14px;
  height: inherit;
  padding: 13px 35px;
  width: inherit;
}
.clear-2 input:hover {
  background: #ee3333 none repeat scroll 0 0;
  border: medium none;
  box-shadow: none;
}



.subscribe_area h2 {
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 35px;
}
















/* large desktop :1366px. */
@media (min-width: 1200px) and (max-width: 1400px) {
.main-menu ul li {
  margin: 0 14px;
}
   
.clickable-mainmenu-btn {
  top: 350px;
}    
.banner-content-2 > h4 {
  font-size: 22px;
  margin: 3px 0 10px;
}    
.slider-position-images {
  right: 50px;
  width: 500px;
}    
    
.pl-155 {
  padding-left: 95px;
}    
.pr-155 {
  padding-right: 95px;
}    
.banner-content-4 {
  padding: 20px 30px;
}    
.toy-banner-shop {
  padding: 100px 15px 0;
}    
.sidebar-style {
  width: 350px;
}    
.sidebar-wrapper {
  margin-left: 350px;
}    
.sidebar-main-menu.main-menu ul li a span {
  padding-right: 100px;
}
.footer-plr {
  padding: 0 15px;
}    
.section-title-2 p {
  width: 56%;
}    
    
.sidebar-main-menu.main-menu ul {
  padding-left: 100px;
}    
.sidebar-logo {
  padding-left: 100px;
}    
.about-story-img2 > img {
  width: 100%;
}    
.about-story-img1 > img {
  width: 100%;
}    
.about-story-img {
  padding-left: 0;
}    
.shop-filters-left {
  margin-left: -50px;
  max-width: 300px;
  padding-right: 50px;
}    
.shop-filters-right.is-visible {
  padding-left: 300px;
}   
.shop-filters-right.is-visible .custom-col-3 {
  flex: 0 0 50%;
  max-width: 50%;
}    
   
.padding-filter .shop-filters-right.is-visible .col-xl-6 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.shop-filters-right .list-img-width {
  flex: 0 0 269px;
}    
.list-btn-style {
  padding: 17px 18px;
}  
.product-list-cart-wishlist {
  margin-top: 20px;
}    
.shop-page-wrapper.padding-filter , .shop-page-wrapper.shop-wrapper-pd {
  padding: 100px 89px 60px;
}    
 .product-list-cart {
  margin-right: 20px;
}   
.custom-col-5 {
  flex: 0 0 25%;
  max-width: 25%;
}    
.custom-col-4 {
  flex: 0 0 33.333%;
  max-width: 33.333%;
}    
.shop-page-wrapper {
  padding: 100px 89px 40px;
}    
 .shop-product-wrapper {
  width: 70%;
     padding-left: 25px;
}   
.shop-sidebar {
  width: 30%;
    padding-right: 25px;
}    
.product-color > ul li {
  margin-right: 18px;
}    
.res-class .shop-filters-right.is-visible .col-xl-6 {
  flex: 0 0 100%;
  max-width: 100%;
}   
.clickable-mainmenu {
  padding: 150px 46px 39px;
}    
 #menu li a {
  font-size: 22px;
  padding: 0 0 10px;
}   
.intelligent-header-pd {
  padding: 0 95px;
}    
.breadcrumb-area {
  background-position: 29% center;
}   
.test {
  padding: 50px 50px;
  top: 100px;
  width: 75%;
}     
.product-list-cart {
  margin-right: 10px;
}    
.list-btn-style {
  padding: 17px 8px;
}    
.list-custom-sidebar .sidebar-list-img-width {
  flex: 0 0 400px;
}
    
    
    
    
    
    
    
    
}

/* Normal desktop :992px. */
@media (min-width: 992px) and (max-width: 1200px) {
.ptb-260 {
  padding: 170px 0;
}
.ptb-320 {
  padding: 215px 0;
}
.ptb-315 {
  padding: 220px 0;
}
.ptb-280 {
  padding: 155px 0;
}
.pt-375 {
  padding-top: 200px;
}
.intelligent-header-pd {
  padding: 0 50px;
}
.social-network > a {
  width: 61px;
}
.breadcrumb-area {
  background-position: 50% center;
}
.blog-tags-style li a {
  padding: 11px 9px;
}

.banner-content-position1 {
  padding: 30px 9px;
}    
.banner-content-position2 {
  padding: 46px 60px 30px;
}    
.banner-content-position3 {
  padding: 30px 9px 27px;
}    
.clickable-mainmenu-btn {
  top: 175px;
}    
.blog-meta ul li + li {
  margin-left: 6px;
  padding-left: 6px;
}
.pl-155 {
  padding-left: 50px;
}    
.pr-155 {
  padding-right: 50px;
}    
.slider-position-images {
  right: 50px;
  width: 400px;
}    
    
.main-menu ul li {
  margin: 0 10px;
}    
.banner-content-2 {
  padding: 20px;
}    
.banner-content-2 > h4 {
  font-size: 22px;
}    
 .single-testimonial > p {
  width: 71%;
}    
.banner-content-4 {
  padding: 20px 30px;
}    
.single-shop-content {
  margin-left: 10px;
}    
.single-shop-services {
  margin-right: 10px;
}     
.single-shop-services:last-child {
  margin-right: 0px;
}  
.banner-content-6 {
  padding: 24px 20px 22px;
}    
.food-foter {
  padding: 0 50px;
}    
.pl-60 {
  padding-left: 40px;
}    
.pr-60 {
  padding-right: 40px;
}    
.slider-content-style-3 {
  padding-left: 40px;
}     
.blog-info > h3 {
  font-size: 22px;
}    
.footer-widget-about {
  padding-right: 0;
}    
.sidebar-style {
  width: 250px;
}   
.sidebar-wrapper {
  margin-left: 250px;
}    
.sidebar-main-menu.main-menu ul {
  padding-left: 50px;
}    
.sidebar-logo {
  padding-left: 50px;
}    
.sidebar-main-menu.main-menu ul li a span {
  padding-right: 20px;
}    
.toy-banner-shop {
  padding: 100px 20px 0;
}    
.footer-plr {
  padding: 0 20px;
}    
.toys-footer .footer-widget-r-content.f-right {
  float: left;
}    
.banner-content-5 {
  padding: 15px;
}    
.section-title-2 p {
  width: 72%;
}    
.toys-footer .footer-nav ul li {
  margin: 0 15px;
}    
.product-details-tab.mr-70 {
  margin-right: 0;
}    
.product-details-small a > img {
  width: 122px;
}
.product-details-small.main-product-details a > img {
  width: 122px;
}
.product-details-small > a {
  margin-bottom: 12px;
}    
.description-review-text .tab-pane p {
  width: 84%;
} 
    
 .product-details-tab.mr-35.product-details-tab2 {
  margin-right: 0;
}   
.product-details-4.pr-70 {
  padding-right: 0;
}    
.product-details-5.pr-70 {
  padding-right: 0;
}    
.product-details-6.pr-70.pro-stick {
  padding-right: 0;
}    
  
.sidebar-active3 .quickview-plus-minus {
  display: block;
}    
.sidebar-active3.sidebar-details7 .quickview-btn-cart {
  margin: 20px 0 0;
}    
.single-details-gallery {
  flex: 0 0 210px;
  margin-right: 20px;
  max-width: 210px;
}
 .product-details-gallery.pr-70 {
  padding-right: 0;
}   
.details-9-content .product-details-content > p { 
  width: 69%;
} 
.pb-210 {
  padding-bottom: 130px;
}    
.pt-205 {
  padding-top: 125px;
}    
.about-story-img2 > img {
  width: 100%;
}    
.about-story-img1 > img {
  width: 100%;
}    
.about-story-img {
  padding-left: 0;
}    
.top-rated-text {
  margin-left: 10px;
}     
 .contact-info-content p {
  font-size: 17px;
}
.shop-page-wrapper.padding-filter , .shop-page-wrapper.shop-wrapper-pd{
  padding: 100px 50px 60px;
}    
.shop-filters-left {
  margin-left: -50px;
  max-width: 300px;
  padding-right: 50px;
}    
.shop-filters-right.is-visible {
  padding-left: 300px;
}    
.product-list-info > h4 {
  font-size: 18px;
}    
.list-btn-style {
  padding: 17px;
}    
.shop-filters-right.is-visible .custom-col-3 {
  flex: 0 0 50%;
  max-width: 50%;
}    
.shop-filters-right.is-visible .shop-found > p {
  font-size: 15px;
}    
.shop-filters-right.is-visible .shop-selector {
  margin-left: 25px;
}    
.shop-filters-right.is-visible .shop-selector select , .shop-filters-right.is-visible .shop-selector label , .shop-filters-right.is-visible .shop-filter > a {
  font-size: 15px;
}    
  
.shop-filters-right.is-visible .shop-filter {
  margin-right: 20px;
}    
 .shop-filters-right.is-visible  .shop-tab a {
  font-size: 27px;
  margin-left: 20px;
}   
   
    
.hidden-items .shop-filters-right.is-visible .custom-col-5 {
  flex: 0 0 50%;
  max-width: 50%;
}    
.custom-col-5 {
  flex: 0 0 33.333%;
  max-width: 33.333%;
}    
.shop-page-wrapper {
  padding: 100px 50px 40px;
}    
.shop-sidebar {
  padding-right: 25px;
  width: 30%;
}    
.custom-col-4 {
  flex: 0 0 50%;
  max-width: 50%;
}    
.shop-product-wrapper {
  padding-left: 25px;
  width: 70%;
}    
.list-custom-sidebar .single-product-list {
  display: block;
}    
.list-custom-sidebar .product-content-list {
  margin-left: 0;
  margin-top: 20px;
}    
    
.list-custom-sidebar .custom-col-3 {
  flex: 0 0 50%;
  max-width: 50%;
}    
.slider-content-style-1.slider-text-right p {
  width: 49%;
}    
.clickable-mainmenu {
  padding: 150px 46px 39px;
}    
#menu li a {
  font-size: 20px;
  padding: 0 0 8px;
} 

.sidebar-main-menu.main-menu nav > ul > li:hover > ul {
  top: -40px;
}     
.sidebar-main-menu.main-menu nav > ul > li:hover > .mega-dropdown.width-col3 {
  top: -70px;
}    
.sidebar-search-input {
  padding: 200px 0 0;
}     
.subscribe-form-group input {
  width: 100%;
} 
.test {
  padding: 50px 50px;
  top: 100px;
  width: 75%;
}    
.product-list-cart {
  margin-right: 20px;
}    
.filter-container .shop-filters-left {
  max-width: 250px;
  padding-right: 40px;
}    
.filter-container .shop-filters-right.is-visible {
  padding-left: 250px;
}    
.filter-container .product-color > ul li {
  margin-right: 10px;
}    
    
    
    
    
    
}

 
/* Tablet desktop :768px. */
@media (min-width: 768px) and (max-width: 991px) {

.slider-content-style-1 p {
  width: 69%;
}
.breadcrumb-area{
  background-position: 52% center;
}

.clickable-mainmenu-btn {
  top: 126px;
}    
.sidebar-search-input form .form-search input {
  width: 500px;
}    
.footer-nav ul li {
  margin: 0 12px;
}    
 .footer-widget.f-right {
  float: left;
}   
.clickable-mainmenu {
  padding: 180px 46px 39px;
}    
.modal-dialog {
  min-width: 100%;
}    
.quickview-btn-cart > a {
  padding: 17px 12px;
}    
.quickview-btn-cart {
  margin: 0 20px;
}    
 .pl-155 {
  padding-left: 30px;
}  
.pr-155 {
  padding-right: 30px;
}    
.header-area-2 {
  padding: 30px 0;
}    
.slider-position-images {
  right: 30px;
  width: 300px;
}    
   
.slider-content-style-2 h2 {
  font-size: 28px;
}    
    
.single-testimonial > p {
  width: 96%;
}
.footer-widget-r-content.f-right {
  float: left;
}  
.slider-content-style-2 {
  padding-left: 40px;
}    
.header-area-2 .header-search-cart {
  margin-right: 50px;
}   
.mean-container a.meanmenu-reveal {
  border: 1px solid #666;
  height: 18px;
  line-height: 1;
  top: -29px;
}    
.header-area-2 .header-sidebar.common-style {
  display: none;
}   
.menu-none-block {
  display: none;
}    
.banner-content-4 {
  padding: 20px 12px;
}    
.timer span {
  margin-right: 27px;
}    
.single-shop-services-all {
  display: block;
  overflow: hidden;
}    
.single-shop-services {
  float: left;
  width: 50%;
}    
.footer-widget-about {
  padding-right: 0;
}    
.footer-map.f-right {
  float: left;
  margin-top: 40px;
}    
.slider-content-style-6 h2 {
  font-size: 44px;
}    
.food-foter {
  display: block;
  overflow: hidden;
  padding: 0 30px;
}   
 .food-single-footer {
  float: left;
  width: 50%;
}   
.food-single-social {
  padding-top: 30px;
}    
.pl-60 {
  padding-left: 30px;
}    
.pr-60 {
  padding-right: 30px;
}    
.menu-search-cart .header-search-cart {
  margin-top: 0px;
} 
.banner-content3-position1 {
  padding: 11px 35px;
}    
.common-banner-style-3 > h2 {
  font-size: 30px;
  line-height: 35px;
}    
    
    
 .sidebar-style {
  width: 200px;
}   
.sidebar-wrapper {
  margin-left: 200px;
}    
.sidebar-main-menu.main-menu ul {
  padding-left: 20px;
}    
.sidebar-logo {
  padding-left: 20px;
}    
.sidebar-main-menu.main-menu ul li a span {
  padding-right: 20px;
}    
.toy-banner-shop {
  padding: 100px 20px 0;
}    
.footer-plr {
  padding: 0 20px;
}    
.toys-footer .footer-widget-r-content.f-right {
  float: left;
}    
  
.single-content-left {
  padding-left: 40px;
}    
.slider-content-style-toy h2 {
  font-size: 55px;
}    
 .main-menu nav > ul > li > .mega-dropdown {
  width: 550px;
}   
    
.banner-area {
  display: block;
}    
.single-banner5.toy-mrg {
  margin: 30px 0;
}    
.section-title-2 p {
  width: 84%;
}    
.toys-footer .footer-nav ul li {
  margin: 0 6px;
}    
.product-details-tab.mr-70 {
  margin-right: 0;
}      
.product-details-img-content {
  margin-bottom: 50px;
}    
.description-review-text .tab-pane p {
  width: 93%;
}    
.product-details-img-content .easyzoom {
  display: block;
}    
.product-details-small a > img {
  width: 160px;
}    
.product-details-tab.product-details-tab2 {
  display: block;
  margin-right: 0;
}    
.product-details-large.tab-content {
  display: block;
  overflow: hidden;
  width: 100%;
}    
.product-details-small.nav.ml-10.product-details-2 {
  margin-left: 0;
  margin-top: 20px;
}
.product-details-small.product-details-2 > a {
  margin-bottom: 12px;
  margin-right: 12px;
}     
.product-details-small.nav.mr-10.product-details-2 {
  margin-right: 0;
}     
.product-details-4.pr-70 {
  padding-right: 0;
}   
.product-details-4 .easyzoom {
  display: block;
}   
    
.product-details-4 {
  margin-bottom: 50px;
}   
.product-details-5.pr-70 {
  padding-right: 0;
}    
    
.product-details-5 {
  margin-bottom: 50px;
}    
.product-details-5 > img {
  padding-top: 40px;
}    
.product-details-6.pr-70.pro-stick {
  padding-right: 0;
}    
     
.product-details-6 {
  margin-bottom: 50px;
}    
.product-details-6 .easyzoom {
  display: block;
}    
.sidebar-active1.product-details7-content {
  margin-bottom: 50px;
}   
 .product-details-gallery.pr-70 {
  padding-right: 0;
}      
 .single-details-gallery {
  flex: 0 0 320px;
     max-width: 320px;
}   
 .easyzoom {
  display: block;
  position: relative;
}   
.details-9-content .product-details-content > p {
  width: 89%;
}    
.pb-210 {
  padding-bottom: 100px;
}    
.pt-205 {
  padding-top: 95px;
}     
.about-story-img {
  justify-content: flex-start;
  margin-top: 50px;
  padding-left: 0;
}    
.about-story-img1 > img , .about-story-img2 > img {
  width: 100%;
}    
.your-order {
  margin-top: 50px;
}   
.shop-filters-right .shop-found > p {
  font-size: 15px;
}    
.shop-filters-right .shop-selector {
  margin-left: 25px;
}    
.shop-filters-right .shop-selector select , .shop-filters-right .shop-selector label , .shop-filters-right .shop-filter > a {
  font-size: 15px;
}    
  
.shop-filters-right .shop-filter {
  margin-right: 20px;
}    
 .shop-filters-right  .shop-tab a {
  font-size: 27px;
  margin-left: 20px;
}    
.shop-page-wrapper.padding-filter , .shop-page-wrapper.shop-wrapper-pd {
  padding: 100px 30px 60px;
}    
.shop-filters-right.is-visible .custom-col-3 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.shop-filters-right .custom-col-3 {
  flex: 0 0 50%;
  max-width: 50%;
}     
.shop-filters-left {
  margin-left: -50px;
  max-width: 250px;
  padding-right: 50px;
}    
.shop-filters-right.is-visible {
  padding-left: 250px;
}  
.shop-filters-right.is-visible .shop-found {
  display: none;
}    
.product-color > ul li {
  margin-right: 10px;
}    
.shop-found > p {
  font-size: 17px;
}    
.shop-filters-right.is-visible .single-product-list {
  display: block;
}    
.shop-filters-right.is-visible .product-content-list {
  margin-left: 0;
  margin-top: 20px;
}    
.top-rated-rating li {
  margin-right: 3px;
}    
.top-rated-text {
  margin-left: 10px;
}    
.product-list-cart-wishlist {
  margin-top: 20px;
}    
    
.custom-col-5 {
  flex: 0 0 50%;
  max-width: 50%;
}    
.hidden-items .shop-filters-right.is-visible .custom-col-5 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.shop-page-wrapper {
  padding: 100px 30px 40px;
}    
.shop-sidebar {
  padding-right: 0px;
  width: 100%;
}    
.custom-col-4 {
  flex: 0 0 50%;
  max-width: 50%;
}    
.shop-product-wrapper {
  padding-left: 0px;
  width: 100%;
}    
.filter-container .shop-filters-left {
  max-width: 250px;
  padding-right: 40px;
}  
.filter-container .shop-filters-right.is-visible {
  padding-left: 250px;
}     
.filter-container .shop-filters-right.is-visible .col-md-6 {
  flex: 0 0 100%;
  max-width: 100%;
}   
.list-custom-sidebar .single-product-list {
  display: block;
}    
.list-custom-sidebar .product-content-list {
  margin-left: 0;
  margin-top: 20px;
}    
    
.list-custom-sidebar .custom-col-3 {
  flex: 0 0 50%;
  max-width: 50%;
}     
.slider-content-style-1.slider-text-right p {
  width: 69%;
}    
#menu li a {
  font-size: 20px;
  padding: 0 0 8px;
}    
.intelligent-header-pd {
  padding: 0 30px;
}    
.ptb-260 {
  padding: 140px 0;
}    
.ptb-320 {
  padding: 160px 0;
}    
.ptb-315 {
  padding: 175px 0;
}    
.pt-375 {
  padding-top: 170px;
}    
.ptb-280 {
  padding: 140px 0;
}    
.sidebar-search-input {
  padding: 200px 0 0;
}  
.subscribe-form-group input {
  width: 100%;
}     
.test {
  padding: 20px 30px;
    top: 120px;
  width: 80%;
}    
.subscribe_area h2 {
  font-size: 25px;
}    
.subscribe-form-group button {
  height: 44px;
  line-height: 40px;
}    
.subscribe-bottom input {
  width: 80%;
}  
.clear-2 input {
  height: inherit;
  padding: 13px 35px;
  width: inherit;
}    
.main-menu nav > ul > li > .mega-dropdown > ul.single-mega-width2 {
  width: 30%;
}    
.main-menu nav > ul > li > .mega-dropdown > ul.single-mega-width {
  width: 35%;
}    
.mega-item-img img {
  width: 100%;
}
.main-menu nav > ul > li > .mega-dropdown > ul > li > a {
  font-size: 14px;
}    
    
    
    
    
}

 
/* small mobile :320px. */
@media (max-width: 767px) {

.ptb-260 {
  padding: 110px 0;
}
.ptb-320 {
  padding: 130px 0;
}
.ptb-315 {
  padding: 130px 0;
}
.ptb-280 {
  padding: 105px 0;
}
.sidebar-search-input {
  padding: 160px 0 0;
}
.sidebar-search-input form .form-search input {
  width: 240px;
}  
.sidebar-cart.inside , .cur-lang-acc-active.inside {
  width: 100%; 
}    
.clickable-mainmenu-icon button {
  right: 75px;
}    
.sidebar-search-icon {
  right: 75px;
}    
.slider-content-style-1 h2 {
  font-size: 25px;
}    
.slider-content-style-1 > h3 {
  font-size: 28px;
}    
.slider-content-style-1 p {
  letter-spacing: 0px;
  width: 100%;
}    
.slider-btn-style {
  padding: 13px 30px 14px;
}    
   
.banner-content-position2 {
  padding: 10px 12px;
}    
.banner-content.banner-content-position2 > p {
  display: none;
}    
.clickable-mainmenu-btn {
  top: 106px;
    
} 
.slinky-menu.slinky-theme-default {
  width: 208px;
}    
.product-tab-list a {
  margin: 0 8px 10px;
}    
.shop-limited-content > h2 {
  font-size: 24px;
  line-height: 33px;
}    
.clickable-mainmenu-btn a {
  font-size: 30px;
  padding: 8px 16px;
}    
.blog-meta ul li + li {
  margin-left: 7px;
  padding-left: 7px;
}    
.blog-info > h3 {
  font-size: 20px;
}    
 .footer-widget-m-content.text-center {
  text-align: left !important;
}   
.footer-nav ul li {
  margin: 0 10px 0 0;
}    
     
.footer-nav ul li a {
  font-size: 14px;
}    
.footer-nav ul {
  justify-content: left;
}    
 .footer-widget.f-right {
  float: left;
}   
.footer-widget-l-content {
  margin-bottom: 40px;
  margin-top: 0;
}    
.footer-nav::before {
  bottom: -13px;
  margin: inherit;
}    
.pt-100 {
  padding-top: 50px;
}    
.pb-95 {
  padding-bottom: 45px;
}    
 .pb-50 {
  padding-bottom: 30px;
}   
.pb-65 {
  padding-bottom: 30px;
}    
.clickable-mainmenu {
  padding: 131px 46px 39px;
}    
.mb-55 {
  margin-bottom: 30px;
}    
.pb-100 {
  padding-bottom: 50px;
}    
.mb-45 {
  margin-bottom: 30px;
}    
.cart-btn-style {
  margin-right: 12px;
  padding: 10px 20px;
}
.wrap-sidebar {
  padding: 45px 22px 0;
}    
.cart-title {
  margin: 0 0 18px 15px;
}    
#menu li a {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  padding: 0 0 7px;
} 
.slinky-theme-default .back::before {
  background: rgba(0, 0, 0, 0) url("../../assets/img/icon-img/14.png") no-repeat scroll center center / 30px auto;
  height: 30px;
  width: 30px;
}
.header-area-2 .header-search-cart {
  margin-right: 50px;
}   
.mean-container a.meanmenu-reveal {
  border: 1px solid #666;
  height: 18px;
  line-height: 1;
  top: -29px;
}    
.header-area-2 .header-sidebar.common-style {
  display: none;
}   
.menu-none-block {
  display: none;
}    
 .pl-155 {
  padding-left: 15px;
}  
.pr-155 {
  padding-right: 15px;
}    
.header-area-2 {
  padding: 30px 0;
}    
.slider-position-images {
  display: none;
}    
   
.slider-content-style-2 h2 {
  font-size: 19px;
    line-height: 35px;
}    
.banner-content-2 {
  padding: 20px;
}    
.banner-content-2 > h4 {
  font-size: 20px;
}    
.section-title > h2 {
  font-size: 27px;
}    
.single-testimonial > p {
  width: 100%;
}    
.footer-widget-r-content.f-right {
  float: left;
}    
.pt-95 {
  padding-top: 45px;
}    
.banner-content-4 {
  padding: 20px 20px;
}    
.coundown-auto > h2 {
  font-size: 34px;
}    
 .timer span {
  margin-bottom: 20px;
}   
.single-shop-services-all {
  display: block;
}    
.pb-70 {
  padding-bottom: 20px;
}    
.slider-content-style-6 h2 {
  font-size: 22px;
}    
.slider-content-style-6 h3 {
  font-size: 22px;
}    
.banner-content-6 > h2 {
  font-size: 30px;
  margin: 1px 0 5px;
}    
 .banner-content-6 {
  padding: 12px 20px 10px;
}   
.pb-90 {
  padding-bottom: 40px;
}    
.food-foter {
  display: block;
  padding: 0 15px;
}    
.pl-60 {
  padding-left: 15px;
}    
.pr-60 {
  padding-right: 15px;
}     
.menu-search-cart .header-search-cart {
  margin-top: 0;
} 
.slider-content-style-3 h2 {
  font-size: 24px;
}    
.common-banner-style-3 > h2 {
  font-size: 20px;
  line-height: 30px;
}    
.banner-content3-position1 {
  padding: 10px 15px;
}    
 .banner-content3-position3 {
  padding: 20px 35px;
}   
    
.footer-widget-about {
  padding-right: 0;
}    
.pb-115 {
  padding-bottom: 80px;
}    
 .pt-120 {
  padding-top: 85px;
}   
.sidebar-style {
  display: none;
}    
.sidebar-wrapper {
  margin-left: 0;
}    
.toy-banner-shop {
  padding: 50px 20px 0;
}   
.slider-content-style-toy h2 {
  font-size: 30px;
}    
 .single-content-left {
  padding-left: 35px;
}   
.banner-area {
  display: block;
}    
 .single-banner5.toy-mrg {
  margin: 30px 0;
}   
.toys-footer .footer-nav ul li {
  margin: 0 9px 0 0;
}    
.footer-plr {
  padding: 0 15px;
}    
.single-slider-hmtoy {
  height: inherit;
  padding: 100px 0;
}    
.section-title-2 p {
  width: 100%;
}    
 .pt-70 {
  padding-top: 50px;
}
.toys-header {
  display: block;
}    
.product-details-tab.mr-70 {
  margin: 0;
} 
.product-details-small a > img {
  width: 133px;
}
.product-details-small.main-product-details a > img {
  width: 133px;
}
.product-details-small > a {
  margin-bottom: 12px;
}    
 .product-details-content > h3 {
  font-size: 22px;
}   
.product-details-img-content {
  margin-bottom: 35px;
}    
 .quickview-btn-cart {
  margin: 0 10px;
}   
.quickview-btn-cart > a {
  padding: 17px 12px;
}    
.description-review-text .tab-pane p {
  width: 100%;
}    
    
 .pb-60 {
  padding-bottom: 50px;
}   
.description-review-title a {
  font-size: 20px;
  margin: 0 6px;
}    
 .description-review-title {
  margin-bottom: 20px;
}   
.product-details-btn {
  left: 15px;
  margin-top: -50px;
}    
.breadcrumb-content-2 > ul li {
  font-size: 14px;
}    
.product-details-tab.product-details-tab2 {
  display: block;
  margin-right: 0;
}    
.product-details-large.tab-content {
  display: block;
  overflow: hidden;
  width: 100%;
}    
.product-details-small.nav.ml-10.product-details-2 {
  margin-left: 0;
  margin-top: 20px;
}
.product-details-small.product-details-2 > a {
  margin-bottom: 12px;
  margin-right: 12px;
}    
.product-details-small.nav.mr-10.product-details-2 {
  margin-right: 0;
}    
.product-details-4.pr-70 {
  padding-right: 0;
}   
.product-details-4 .easyzoom {
  display: block;
}   
    
.product-details-4 {
  margin-bottom: 50px;
}     
.bundle-area > h3 {
  font-size: 17px;
}    
 .product-details-5.pr-70 {
  padding-right: 0;
}    
    
.product-details-5 {
  margin-bottom: 50px;
}    
.product-details-5 > img {
  padding-top: 40px;
}   
.product-details-6.pr-70.pro-stick {
  padding-right: 0;
}    
     
.product-details-6 {
  margin-bottom: 50px;
}     
.product-details-6 .easyzoom {
  display: block;
}    
.inner-wrapper-sticky > h3 {
  font-size: 20px;
}    
.sidebar-active1.product-details7-content {
  margin-bottom: 50px;
}   
 .product-details-gallery.pr-70 {
  padding-right: 0;
}      
 .single-details-gallery {
  flex: 0 0 100%;
     max-width: 100%;
     float: inherit;
}   
 .single-details-gallery .easyzoom {
  display: block;
}   
.single-details-gallery.mr-20 {
  margin-right: 0;
}    
.details-9-content .product-details-content > p {
  width: 100%;
}   
.product-details-9 .product-details-btn {
  margin-top: -55px;
}    
.pb-210 {
  padding-bottom: 70px;
}    
.pt-205 {
  padding-top: 65px;
}    
.breadcrumb-content h2 {
  font-size: 30px;
}    
.login-form-container {
  padding: 50px 20px;
}    
.about-story {
  padding-right: 0;
}    
.about-story-img {
  display: block;
  justify-content: flex-start;
  margin-top: 50px;
  padding-left: 0;
}   
.about-story-img1 > img , .about-story-img2 > img {
  width: 100%;
}    
.about-story-img2 {
  margin-left: 0;
  margin-top: 30px;
}    
.section-title-others > p {
  width: 100%;
} 
.ptb-100 {
  padding: 50px 0;
}    
.video-popup {
  font-size: 44px;
  height: 61px;
  line-height: 60px;
  width: 80px;
}    
   
.blog-details-style blockquote {
  padding: 14px 25px;
}    
.blog-middle-mrg {
  margin: 32px 0 33px;
}    
.blog-img-details {
  padding-left: 15px;
}    
.footer-widget-r-content {
  margin-top: 40px;
}    
.coupon-all {
  margin-top: 30px;
} 
.coupon2 {
  float: left;
  margin-top: 25px;
}    
 .coupon-all input.button {
  padding: 0 18px;
}   
.ship-different-title h3 label {
  font-size: 15px;
  margin-right: 5px;
}    
.your-order {
  margin-top: 50px;
  padding: 30px 10px 45px;
}    
p.checkout-coupon input[type="text"] {
  width: 150px;
}    
.contact-info-content p {
  font-size: 17px;
}    
.shop-page-wrapper.padding-filter , .shop-page-wrapper.shop-wrapper-pd {
  padding: 50px 15px;
}   
.shop-filters-right .custom-col-3 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.shop-filters-left {
  margin-left: 0;
  max-width: 100%;
  opacity: 1;
  padding-right: 0;
  position: inherit;
  visibility: visible;
  width: 100%;
    z-index: 999;
}
.shop-filters-right.is-visible {
  padding-left: 0;
}    
.shop-found-selector {
  display: block;
} 
.shop-bar {
  display: block;
}    
.shop-selector {
  margin-bottom: 15px;
  margin-left: 0;
  margin-top: 15px;
}    
.single-product-list {
  display: block;
}    
.product-content-list {
  margin-left: 0;
  margin-top: 20px;
}    
.product-list-cart-wishlist {
  margin-top: 20px;
}    
.list-btn-style {
  padding: 17px 25px;
}    
.custom-col-5 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.hidden-items .shop-filters-right.is-visible .custom-col-5 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.product-list-cart {
  margin-right: 20px;
}    
.shop-page-wrapper {
  padding: 100px 15px 40px;
}    
.shop-sidebar {
  padding-right: 0px;
  width: 100%;
}    
.custom-col-4 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.shop-product-wrapper {
  padding-left: 0px;
  width: 100%;
}     
.filter-container .shop-filters-left {
  max-width: 100%;
  padding-right: 0;
}   
.list-custom-sidebar .single-product-list {
  display: block;
}    
.list-custom-sidebar .product-content-list {
  margin-left: 0;
  margin-top: 20px;
}    
    
.list-custom-sidebar .custom-col-3 {
  flex: 0 0 100%;
  max-width: 100%;
}    
.modal-body {
  display: block;
  justify-content: inherit;
  padding: 15px;
}    
    
 .modal-dialog {
  margin: 150px auto;
  min-width: 100%;
}   
 .modal-body .qwick-view-left , .modal-body .qwick-view-left {
  margin-right: 0;
}   
.modal-body .qwick-view-left {
  min-width: 100%;
} 
.modal-body .quick-view-list.nav img {
  width: 85px;
}    
.modal-body .qwick-view-right {
  margin-top: 50px;
}   
#exampleModal .close {
  right: 50px;
}    
.slider-content-style-1.slider-text-right p {
  width: 100%;
}    
.testimonial-food .single-testimonial > p {
  padding: 0 20px;
}    
  
.sidebar-cart-icon button, .sidebar-nav-icon button , .sidebar-search-icon button , .clickable-mainmenu-icon button {
  font-size: 40px;
}    
.intelligent-header-pd {
  padding: 0 15px;
}
.breadcrumb-area {
  background-position: 48% center;
}    
.social-network > a {
  height: 50px;
  line-height: 49px;
  width: 60px;
}    
.subscribe-bottom input {
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}    
.test {
  padding: 20px 30px;
    top: 50px;
}    
.subscribe_area h2 {
  font-size: 25px;
}    
.subscribe-form-group button {
  height: 44px;
  line-height: 40px;
} 
.test {
  width: 100%;
}    
.clear-2 input {
  width: inherit;
    padding: 12px 30px;
}    
.shop-listview-sidebar {
  padding: 0;
}    
    
 
}
 
/* Large Mobile :480px. */
@media only screen and (min-width: 480px) and (max-width: 767px) {
    
.coupon2 {
  float: right;
  margin-top: 0px;
} 
    
 
}
