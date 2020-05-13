<template>
  <f7-page>
    <f7-navbar title="Text Editor" back-link="返回"></f7-navbar>
    <f7-block>
      <p>Framework7 comes with a touch-friendly Rich Text Editor component. It is based on modern "contenteditable" API so it should work everywhere as is.</p>
      <p>It comes with the basic set of formatting features. But its functionality can be easily extended and customized to fit any requirements.</p>
    </f7-block>

    <f7-block-title>Default Setup</f7-block-title>
    <f7-text-editor />

    <f7-block-title>With Placeholder</f7-block-title>
    <f7-text-editor
      placeholder="Enter text..."
    />

    <f7-block-title>With Default Value</f7-block-title>
    <f7-text-editor
      placeholder="Enter text..."
      :value="customValue"
      @texteditor:change="(v) => customValue = v"
    />

    <f7-block-title>Specific Buttons</f7-block-title>
    <f7-block-header>It is possible to customize which buttons (commands) to show.</f7-block-header>
    <f7-text-editor
      placeholder="Enter text..."
      :buttons="[
        ['bold', 'italic', 'underline', 'strikeThrough'],
        ['orderedList', 'unorderedList']
      ]"
    />

    <f7-block-title>Custom Button</f7-block-title>
    <f7-block-header>It is possible to create custom editor buttons. Here is the custom "hr" button that adds horizontal rule:</f7-block-header>
    <f7-text-editor
      placeholder="Enter text..."
      :customButtons="customButtons"
      :buttons="[
        ['bold', 'italic', 'underline', 'strikeThrough'],
        'hr'
      ]"
    />

    <f7-block-title>Resizable</f7-block-title>
    <f7-block-header>Editor will be resized based on its content.</f7-block-header>
    <f7-text-editor
      placeholder="Enter text..."
      resizable
      :buttons="['bold', 'italic', 'underline', 'strikeThrough']"
    />

    <f7-block-title>Popover Mode</f7-block-title>
    <f7-block-header>In this mode, there is no toolbar with buttons, but they appear as popover when you select any text in editor.</f7-block-header>
    <f7-text-editor
      placeholder="Enter text..."
      mode="popover"
      :buttons="['bold', 'italic', 'underline', 'strikeThrough']"
      style="--f7-text-editor-height: 150px"
    />

    <f7-block-title>Keyboard Toolbar Mode</f7-block-title>
    <f7-block-header>In this mode, toolbar with buttons will appear on top of virtual keyboard when editor is in the focus. It is supported only in iOS, Android cordova apps and in Android Chrome. When not supported it will fallback to "popover" mode.</f7-block-header>
    <f7-text-editor
      placeholder="Enter text..."
      mode="keyboard-toolbar"
      style="--f7-text-editor-height: 150px"
    />

    <f7-block-title>As List Input</f7-block-title>
    <f7-block-header>Text editor can be used in list with other inputs. In this example it is enabled with "keyboard-toolbar"/"popover" type for "About" field.</f7-block-header>
    <f7-list>
      <f7-list-input
        type="text"
        label="Name"
        placeholder="Your name"
      />
      <f7-list-input
        type="texteditor"
        label="About"
        placeholder="About"
        resizable
        :textEditorParams="{
          mode: 'popover',
          buttons: ['bold', 'italic', 'underline', 'strikeThrough']
        }"
        :value="listEditorValue"
        @texteditor:change="(value) => listEditorValue = value"
      />
    </f7-list>
  </f7-page>
</template>
<script>
  import { f7Page, f7Navbar, f7BlockTitle, f7BlockHeader, f7Block, f7TextEditor, f7List, f7ListInput } from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7Navbar,
      f7BlockTitle,
      f7BlockHeader,
      f7Block,
      f7TextEditor,
      f7List,
      f7ListInput,
    },
    data() {
      return {
        customButtons: {
          hr: {
            content: '&lt;hr&gt;',
            onClick(editor, buttonEl) {
              document.execCommand('insertHorizontalRule', false);
            },
          },
        },
        customValue: `<p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>
        <p>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。</p>`,
        listEditorValue: '',
      }
    },
  };
</script>
