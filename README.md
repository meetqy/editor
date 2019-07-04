# meetqyEditor

一款简易的web富文本编辑器

![](/preview.png)

## 使用

1.引入js文件

2.实例化编辑器
```
new MeetqyEditor({
  el: '#box'
})
```

## 文档

```
{
  el: '',
  width: 1100,
  height: 450,
  toolbar: {                            // 菜单栏配置  不显示设置为false, value表示菜单的title
    bold: '加粗',                       
    strike_through: '删除线',            
    underline: '下划线',                
    italic: '斜体',                     
    remove_format: '去除所有格式',       
    ordered_list: '有序列表',            
    unordered_list: '无序列表',          
    justify_left: '左对齐',
    justify_center: '居中对齐',
    justify_right: '右对齐',
    font_size_up: '字体+',
    font_size_down: '字体-'
  }
}
```