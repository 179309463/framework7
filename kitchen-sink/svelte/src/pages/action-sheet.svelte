<!-- svelte-ignore a11y-missing-attribute -->
<Page>
  <Navbar title="Action Sheet" backLink="返回" />
  <Block strong>
    <p class="row">
      <!-- One group, open by direct accessing instance .open() method -->
      <Button class="col" fill onClick={() => actionsOneGroup11.open()}>One group, three buttons</Button>
      <Button class="col" fill onClick={() => actionsOneGroup12.open()}>One group, title, three buttons</Button>
    </p>
    <p class="row">
      <!--  Two groups, open by "actionsOpen" attribute -->
      <Button class="col" fill actionsOpen="#actions-two-groups">Two groups</Button>
      <Button class="col" fill actionsOpen="#actions-three-groups">Three groups</Button>
    </p>
    <p>
      <!-- Actions Grid, open by changing actionGridOpened state property -->
      <Button fill onClick={() => actionGridOpened = true}>Action Grid</Button>
    </p>
  </Block>

  <BlockTitle>Action Sheet To Popover</BlockTitle>
  <Block strong>
    <p bind:this={buttonToPopoverWrapper}>
      Action Sheet can be automatically converted to Popover (for tablets). This button will open Popover on tablets and Action Sheet on phones:
      <Button
        style="display: inline-block"
        class="button-to-popover"
        onClick={openActionsPopover}
      >Actions</Button>
    </p>
  </Block>

  <!-- One Group -->
  <Actions bind:this={actionsOneGroup11}>
    <ActionsGroup>
      <ActionsButton bold>Button 1</ActionsButton>
      <ActionsButton>Button 2</ActionsButton>
      <ActionsButton color="red">取消</ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions bind:this={actionsOneGroup12}>
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton bold>Button 1</ActionsButton>
      <ActionsButton>Button 2</ActionsButton>
      <ActionsButton color="red">取消</ActionsButton>
    </ActionsGroup>
  </Actions>

  <!-- Two Groups -->
  <Actions id="actions-two-groups">
    <ActionsGroup>
      <ActionsLabel>Do something</ActionsLabel>
      <ActionsButton bold>Button 1</ActionsButton>
      <ActionsButton>Button 2</ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton color="red">取消</ActionsButton>
    </ActionsGroup>
  </Actions>

  <!-- Three Groups -->
  <Actions id="actions-three-groups">
    <ActionsGroup>
      <ActionsLabel>Share</ActionsLabel>
      <ActionsButton>Mail</ActionsButton>
      <ActionsButton>Messages</ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsLabel>Social share</ActionsLabel>
      <ActionsButton>Facebook</ActionsButton>
      <ActionsButton>Twitter</ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton color="red">取消</ActionsButton>
    </ActionsGroup>
  </Actions>

  <!-- Grid -->
  <Actions grid={true} opened={actionGridOpened} onActionsClosed={() => actionGridOpened = false}>
    <ActionsGroup>
      <ActionsButton>
        <img slot="media" src="https://cdn.framework7.io/placeholder/people-96x96-1.jpg" width="48" style="max-width: 100%"/>
        <span>Button 1</span>
      </ActionsButton>
      <ActionsButton>
        <img slot="media" src="https://cdn.framework7.io/placeholder/people-96x96-2.jpg" width="48" style="max-width: 100%"/>
        <span>Button 2</span>
      </ActionsButton>
      <ActionsButton>
        <img slot="media" src="https://cdn.framework7.io/placeholder/people-96x96-3.jpg" width="48" style="max-width: 100%"/>
        <span>Button 3</span>
      </ActionsButton>
    </ActionsGroup>
    <ActionsGroup>
      <ActionsButton>
        <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-96x96-4.jpg" width="48" style="max-width: 100%"/>
        <span>Button 4</span>
      </ActionsButton>
      <ActionsButton>
        <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-96x96-5.jpg" width="48" style="max-width: 100%"/>
        <span>Button 5</span>
      </ActionsButton>
      <ActionsButton>
        <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-96x96-6.jpg" width="48" style="max-width: 100%"/>
        <span>Button 6</span>
      </ActionsButton>
    </ActionsGroup>
  </Actions>
</Page>
<script>
  import { onDestroy } from 'svelte';
  import { f7, Navbar, Page, BlockTitle, Block, Link, Button, Actions, ActionsGroup, ActionsLabel, ActionsButton } from 'framework7-svelte';

  let actionGridOpened = false;

  let actionsOneGroup11;
  let actionsOneGroup12;
  let actionsToPopover;
  let buttonToPopoverWrapper;

  function openActionsPopover() {
    if (!actionsToPopover) {
      actionsToPopover = f7.actions.create({
        buttons: [
          {
            text: 'Do something',
            label: true,
          },
          {
            text: 'Button 1',
            bold: true,
          },
          {
            text: 'Button 2',
          },
          {
            text: '取消',
            color: 'red',
          },
        ],
        // Need to specify popover target
        targetEl: buttonToPopoverWrapper.querySelector('.button-to-popover'),
      });
    }

    // Open
    actionsToPopover.open();
  }

  onDestroy(() => {
    if (actionsToPopover) {
      actionsToPopover.destroy();
    }
  });
</script>
