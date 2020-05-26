<template>
  <f7-page>
    <f7-navbar title="Buttons" back-link="返回"></f7-navbar>

    <f7-block-title>Usual Buttons</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button round disabled>Round</f7-button>
        </f7-col>
        <f7-col>
          <f7-button rectangle>Rectangle</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Fill Buttons</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill round>Round</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill rectangle>Rectangle</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Outline Buttons</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button outline>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button outline round>Round</f7-button>
        </f7-col>
        <f7-col>
          <f7-button outline rectangle>Rectangle</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Raised Buttons</f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button raised>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised fill>Fill</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised outline>Outline</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button raised round>Round</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised fill round>Fill</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised outline round>Outline</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button raised rectangle>Rectangle</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised fill rectangle>Fill</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised outline rectangle>Outline</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Segmented</f7-block-title>
    <f7-block strong>
       <f7-segmented tag="p">
        <f7-button>Button</f7-button>
        <f7-button>Button</f7-button>
        <f7-button active>Active</f7-button>
      </f7-segmented>
      <f7-segmented strong tag="p">
        <f7-button :active="activeStrongButton === 0" @click="activeStrongButton = 0">Button</f7-button>
        <f7-button :active="activeStrongButton === 1" @click="activeStrongButton = 1">Button</f7-button>
        <f7-button :active="activeStrongButton === 2" @click="activeStrongButton = 2">Button</f7-button>
      </f7-segmented>
      <f7-segmented raised tag="p">
        <f7-button>Button</f7-button>
        <f7-button>Button</f7-button>
        <f7-button active>Active</f7-button>
      </f7-segmented>
      <f7-segmented tag="p">
        <f7-button outline>Outline</f7-button>
        <f7-button outline>Outline</f7-button>
        <f7-button outline active>Active</f7-button>
      </f7-segmented>
      <f7-segmented raised round tag="p">
        <f7-button round>Button</f7-button>
        <f7-button round>Button</f7-button>
        <f7-button round active>Active</f7-button>
      </f7-segmented>
      <f7-segmented raised rectangle tag="p">
        <f7-button rectangle>Button</f7-button>
        <f7-button rectangle>Button</f7-button>
        <f7-button rectangle active>Active</f7-button>
      </f7-segmented>
      <f7-segmented round tag="p">
        <f7-button round outline>Outline</f7-button>
        <f7-button round outline>Outline</f7-button>
        <f7-button round outline active>Active</f7-button>
      </f7-segmented>
      <f7-segmented rectangle tag="p">
        <f7-button rectangle outline>Outline</f7-button>
        <f7-button rectangle outline>Outline</f7-button>
        <f7-button rectangle outline active>Active</f7-button>
      </f7-segmented>
    </f7-block>

    <f7-block-title>Large Buttons</f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large outline>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large fill>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large raised>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large raised outline>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large raised fill>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large round>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large outline round>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large fill round>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large rectangle>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large outline rectangle>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large fill rectangle>Fill</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Small Buttons</f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button small>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small outline>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small fill>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button small raised>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small raised outline>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small raised fill>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button small round>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small outline round>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small fill round>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button small rectangle>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small outline rectangle>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button small fill rectangle>Fill</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Color Buttons</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button color="red">Red</f7-button>
        </f7-col>
        <f7-col>
          <f7-button color="green">Green</f7-button>
        </f7-col>
        <f7-col>
          <f7-button color="blue">Blue</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Color Fill Buttons</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill color="red">Red</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill color="green">Green</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill color="blue">Blue</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>List-Block Buttons</f7-block-title>
    <f7-list inset>
      <f7-list-button title="List Button 1"></f7-list-button>
      <f7-list-button title="List Button 2"></f7-list-button>
      <f7-list-button title="List Button 3"></f7-list-button>
    </f7-list>
    <f7-list inset>
      <f7-list-button title="Large Red Button" color="red"></f7-list-button>
    </f7-list>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7Row, f7Col, f7ListButton, f7Button, f7Segmented } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7Row,
      f7Col,
      f7ListButton,
      f7Button,
      f7Segmented,
    },
    data() {
      return {
        activeStrongButton: 0,
      };
    },
  }
</script>
