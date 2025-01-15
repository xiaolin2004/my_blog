(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{374:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Golang接口声明了操作而不透露任何与数据相关的信息。")]),s._v(" "),t("h2",{attrs:{id:"接口类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口类型"}},[s._v("#")]),s._v(" 接口类型")]),s._v(" "),t("blockquote",[t("p",[s._v("接口类型是一种抽象的类型。它不会暴露出它所代表的对象的内部值的结构和这个对象支持的基础操作的集合；它们只会表现出它们自己的方法。也就是说当你有看到一个接口类型的值时，你不知道它是什么，唯一知道的就是可以通过它的方法来做什么。")]),s._v(" "),t("p",[s._v("接口类型具体描述了一系列方法的集合，一个实现了这些方法的具体类型是这个接口类型的实例。\n--《"),t("a",{attrs:{href:"https://golang-china.github.io/gopl-zh/ch7/ch7-01.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("go语言圣经"),t("OutboundLink")],1),s._v("》")])]),s._v(" "),t("h2",{attrs:{id:"接口值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口值"}},[s._v("#")]),s._v(" 接口值")]),s._v(" "),t("blockquote",[t("p",[s._v("概念上讲一个接口的值，"),t("strong",[s._v("接口值，由两个部分组成，一个具体的类型和那个类型的值")]),s._v("。它们被称为接口的动态类型和动态值。....在我们的概念模型中，一些"),t("strong",[s._v("提供每个类型信息的值被称为类型描述符，比如类型的名称和方法")]),s._v("。在一个接口值中，类型部分代表与之相关类型的描述符。\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20250115150426.png",alt:"image.png"}})])]),s._v(" "),t("blockquote",[t("p",[s._v("[!NOTE] Interface{}\n"),t("strong",[s._v("空接口类型")]),s._v("不会对数据进行任何方法实现上的要求，因此"),t("strong",[s._v("空接口值")]),s._v("可以存任何类型的数据")])]),s._v(" "),t("h3",{attrs:{id:"接口值的可比性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口值的可比性"}},[s._v("#")]),s._v(" 接口值的可比性")]),s._v(" "),t("blockquote",[t("p",[s._v("接口值可以使用==和!＝来进行比较。两个接口值相等仅当它们都是nil值，或者它们的动态类型相同并且动态值也根据这个动态类型的==操作相等。")])]),s._v(" "),t("h3",{attrs:{id:"golang八股-一个包含nil指针的接口不是nil接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang八股-一个包含nil指针的接口不是nil接口"}},[s._v("#")]),s._v(" Golang八股：一个包含nil指针的接口不是nil接口")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" debug "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" buf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Buffer\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" debug "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        buf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Buffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// enable collection of output")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NOTE: subtly incorrect!")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" debug "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...use buf...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// If out is non-nil, output will be written to it.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("out io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Writer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...do something...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"done!\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("该程序在debug=false是会发生panic，原因是")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" buf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Buffer\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这一行，"),t("code",[s._v("buf")]),s._v("被赋值一个"),t("code",[s._v("*bytes.Buffer")]),s._v("的空指针，值概念如下："),t("img",{attrs:{src:"https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20250115151449.png",alt:"image.png"}}),s._v("\n而方法f以"),t("code",[s._v("io.Writer")]),s._v("的类型传入参数，因此，"),t("code",[s._v("buf")]),s._v("会被视为一个具有动态类型"),t("code",[s._v("*bytes.Buffer")]),s._v("，动态值为"),t("code",[s._v("nil")]),s._v("的接口，与nil接口的比较为false，进入条件导致nil指针解引用")]),s._v(" "),t("p",[s._v("只有当接口的动态方法与动态值同时为nil时，接口才是nil接口")]),s._v(" "),t("blockquote",[t("p",[s._v("[!NOTE]\n这段程序的迷惑之处在于，我在阅读代码时，很少关注能够运行代码的传参类型，以为能传入就是类型可用，就是行为正确，只能说被rust养得太好了。")])]),s._v(" "),t("h2",{attrs:{id:"类型断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型断言"}},[s._v("#")]),s._v(" 类型断言")]),s._v(" "),t("p",[s._v("有了"),t("strong",[s._v("接口值")]),s._v("的概念模型，类型断言就会变得非常直觉\n考虑这一段程序")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" w io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Writer\nw "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Stdout\nf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" w"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("File"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// success: f == os.Stdout")]),s._v("\nc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" w"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Buffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// panic: interface holds *os.File, not *bytes.Buffer")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("后两行所做的赋值操作，其实就是"),t("strong",[s._v("在赋动态值的基础上，检查动态类型")]),s._v("，值的类型是不会改变的，在上例中，都是"),t("code",[s._v("os.File")])]),s._v(" "),t("p",[s._v("不会panic的写法：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" w io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Writer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Stdout\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ok "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" w"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("File"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// success:  ok, f == os.Stdout")]),s._v("\nb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ok "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" w"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Buffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// failure: !ok, b == nil")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"类型分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型分支"}},[s._v("#")]),s._v(" 类型分支")]),s._v(" "),t("p",[s._v("知道了类型断言本质上是判断类型是否符合接口，那么就可以使用常规bool判断的思路，让类型断言更进一步")]),s._v(" "),t("blockquote",[t("p",[s._v("接口被以两种不同的方式使用。在第一个方式中，以io.Reader，io.Writer，fmt.Stringer，sort.Interface，http.Handler和error为典型，一个接口的方法表达了实现这个接口的具体类型间的相似性，但是隐藏了代码的细节和这些具体类型本身的操作。重点在于方法上，而不是具体的类型上。")]),s._v(" "),t("p",[s._v("第二个方式是"),t("strong",[s._v("利用一个接口值可以持有各种具体类型值的能力，将这个接口认为是这些类型的联合")]),s._v("。类型断言用来动态地区别这些类型，使得对每一种情况都不一样。在这个方式中，重点在于具体的类型满足这个接口，而不在于接口的方法（如果它确实有一些的话），并且没有任何的信息隐藏。我们将以这种方式使用的接口描述为discriminated unions（可辨识联合）。")])]),s._v(" "),t("p",[s._v("例子")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sqlQuote")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NULL"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprintf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x has type interface{} here.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TRUE"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FALSE"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sqlQuoteString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (not shown)")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("panic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprintf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unexpected type %T: %v"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);