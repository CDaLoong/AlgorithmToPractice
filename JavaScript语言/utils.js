
/**
 * @Description: 将一个不支持自闭和的 html 标签转换为非自闭和标签，如 <table /> => <table></table>
 * @author DaLoong
 * @date 2022-03-30 12:53:19
 * @param  {string} html html标签
 * @return {string} 转换后的html标签
 */
const convertTag = (html) => {
    const tags = /^(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
    return html.replace(/(<(\w+)[^>]*?)\/>/g, (all, front, tag) => {
        return tags.test(tag) ? all :
            front + "></" + tag + ">";
    });
}
console.log(convertTag('<div/>'))


 /**
  * @Description: 将元素标签转换为一系列dom节点
  * @author DaLoong
  * @date 2022-03-30 13:15:41
  * @param {string} htmlString html元素字符串
  * @param {object} doc document
  * @param {object} fragment node 容器节点
  * @return {object} dom node节点
  */
const getNodes = (htmlString, doc, fragment) => {
    const map = {
        "<td":[3,"<table><tbody><tr>","</tr></tbody></table>"],
        "<th":[3,"<table><tbody><tr>","</tr></tbody></table>"],
        "<tr":[2,"<table><thead>","</thead></table>"],
        "<option":[1,"<select multiple='multiple'>","</select>"],
        "<optgroup":[1,"<select multiple='multiple'>","</select>"],
        "<legend":[1,"<fieldset>","</fieldset>"],
        "<thead":[1,"<table>","</table>"],
        "<tbody":[1,"<table>","</table>"],
        "<tfoot":[1,"<table>","</table>"],
        "<colgroup":[1,"<table>","</table>"],
        "<caption":[1,"<table>","</table>"],
        "<col":[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
        "<link":[3,"<div></div><div>","</div>"]
    };
    const tagName = htmlString.match(/<\w+/);
    let mapEntry = tagName ? map[tagName[0]] : null;
    if  (!mapEntry) mapEntry = [0, " "," " ];

    let div = (doc || document).createElement("div");
    div.innerHTML = mapEntry[1] + htmlString + mapEntry[2];

    while (mapEntry[0]--) {
        div = div.lastChild;
    }

     if (fragment) {
         while (div.firstChild) {
             fragment.appendChild(div.firstChild);
         }
     }

    return div.childNodes;
}
console.log(getNodes('<td>test</td><td>test2</td>'))


 /**
  * @Description: 如果传入value，将相应的样式属性值赋值为value；如果没有传入value，返回该样式属性值
  * @author DaLoong
  * @date 2022-03-30 14:01:08
  * @param {object} element dom
  * @param {string} name 样式名
  * @param {string} value 样式值
  * @return {string} 样式值
  */
const style = (element, name, value) => {
    name = name.replace(/-([a-z])/ig, (all,letter) => {
        return letter.toUpperCase();
    });
    if (typeof value !== 'undefined') {
        element.style[name] = value;
    }
    return element.style[name];
}

