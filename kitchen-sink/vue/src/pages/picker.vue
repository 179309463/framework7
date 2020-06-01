<template>
  <f7-page :page-content="false" @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
    <f7-navbar title="Picker" back-link="返回"></f7-navbar>
    <div class="page-content">
      <div class="block">
        <p>Picker is a powerful component that allows you to create custom overlay pickers which looks like native picker.</p>
        <p>Picker could be used as inline component or as overlay. Overlay Picker will be automatically converted to Popover on tablets (iPad).</p>
      </div>
      <div class="block-title">Picker with single value</div>
      <div class="list no-hairlines-md">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Your iOS device" readonly="readonly" id="demo-picker-device"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="block-title">2 values and 3d-rotate effect</div>
      <div class="list no-hairlines-md">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Describe yourself" readonly="readonly" id="demo-picker-describe"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="block-title">Dependent values</div>
      <div class="list no-hairlines-md">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Your car" readonly="readonly" id="demo-picker-dependent"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="block-title">Custom toolbar</div>
      <div class="list no-hairlines-md">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Describe yourself" readonly="readonly" id="demo-picker-custom-toolbar"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">年月日-时间段</div>
      <div class="list large-inset">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date Time" readonly="readonly" id="demo-picker-yyyyMMdd-period"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">年月日时分秒</div>
      <div class="list large-inset">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date Time" readonly="readonly" id="demo-picker-yyyyMMddhhmmss"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">年月日时分</div>
      <div class="list large-inset">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date Time" readonly="readonly" id="demo-picker-yyyyMMddhhmm"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="block block-strong large-inset margin-bottom">
        <div id="demo-picker-yyyyMMddhhmm-container"></div>
      </div>

      <div class="block-title">年月日</div>
      <div class="list large-inset">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date" readonly="readonly" id="demo-picker-yyyyMMdd"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">年月</div>
      <div class="list large-inset">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date" readonly="readonly" id="demo-picker-yyyyMM"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">时分秒</div>
      <div class="list large-inset">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date Time" readonly="readonly" id="demo-picker-hhmmss"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">时分</div>
      <div class="list large-inset">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date Time" readonly="readonly" id="demo-picker-hhmm"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="block-title">分秒</div>
      <div class="list large-inset no-margin-top">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Date Time" readonly="readonly" id="demo-picker-mmss"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
    },
    methods: {
      onPageInit(e) {
        const self = this;
        const today = new Date();
        const app = self.$f7;
        // iOS Device picker
        self.pickerDevice = app.picker.create({
          inputEl: '#demo-picker-device',
          cols: [
            {
              textAlign: 'center',
              values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3'],
            },
          ],
        });

        // Describe yourself picker
        self.pickerDescribe = app.picker.create({
          inputEl: '#demo-picker-describe',
          rotateEffect: true,
          cols: [
            {
              textAlign: 'left',
              values: ('Super Amazing Bat Iron Rocket Lex Beautiful Wonderful Raining Happy Funny Cool Hot').split(' '),
            },
            {
              values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' '),
            },
          ],
        });

        // Dependent values
        const carVendors = {
          Japanese: ['Honda', 'Lexus', 'Mazda', 'Nissan', 'Toyota'],
          German: ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'],
          American: ['Cadillac', 'Chrysler', 'Dodge', 'Ford'],
        };
        self.pickerDependent = app.picker.create({
          inputEl: '#demo-picker-dependent',
          rotateEffect: true,
          formatValue(values) {
            return values[1];
          },
          cols: [
            {
              textAlign: 'left',
              values: ['Japanese', 'German', 'American'],
              onChange(picker, country) {
                if (picker.cols[1].replaceValues) {
                  picker.cols[1].replaceValues(carVendors[country]);
                }
              },
            },
            {
              values: carVendors.Japanese,
              width: 160,
            },
          ],
        });

        // Custom Toolbar
        self.pickerCustomToolbar = app.picker.create({
          inputEl: '#demo-picker-custom-toolbar',
          rotateEffect: true,
          renderToolbar() {
            return '<div class="toolbar">' +
          '<div class="toolbar-inner">' +
            '<div class="left">' +
              '<a href="#" class="link toolbar-randomize-link">Randomize</a>' +
            '</div>' +
            '<div class="right">' +
              '<a href="#" class="link sheet-close popover-close">That\'s me</a>' +
            '</div>' +
          '</div>' +
        '</div>';
          },
          cols: [
            {
              values: ['Mr', 'Ms'],
            },
            {
              textAlign: 'left',
              values: ('Super Amazing Bat Iron Rocket Lex Beautiful Wonderful Raining Happy Funny Cool Hot').split(' '),
            },
            {
              values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' '),
            },
          ],
          on: {
            open(picker) {
              picker.$el.find('.toolbar-randomize-link').on('click', () => {
                const col0Values = picker.cols[0].values;
                const col0Random = col0Values[Math.floor(Math.random() * col0Values.length)];

                const col1Values = picker.cols[1].values;
                const col1Random = col1Values[Math.floor(Math.random() * col1Values.length)];

                const col2Values = picker.cols[2].values;
                const col2Random = col2Values[Math.floor(Math.random() * col2Values.length)];

                picker.setValue([col0Random, col1Random, col2Random]);
              });
            },
          },
        });
        

        // 年月日-时间段
        self.pickerInline_yyyyMMddhhmm = app.picker.create({
          inputEl: '#demo-picker-yyyyMMdd-period',
          rotateEffect: true,
          value: [
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            today.getHours() >= 6 && today.getHours() < 12
            ? 0
            : today.getHours() > 12 && today.getHours() < 18
            ? 1 : 2
          ],
          formatValue(values, displayValues) {
            return ` ${values[0]} ${displayValues[1]} ${values[2]} ${displayValues[3]}`;
          },
          cols: [
            // Years
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 1950; i <= 2030; i += 1) { arr.push(i); }
                return arr;
              }()),
            },            
            // Months
            {
              values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
              displayValues: ('January February March April May June July August September October November December').split(' '),
              textAlign: 'left',
            },
            // Days
            {
              values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },

            // Space divider
            {
              divider: true,
              content: '&nbsp;&nbsp;',
            },
            // 时间段
            {
              values: ('0 1 2').split(' '),
              displayValues: ["上午", "下午", "晚上"],
            },
          ],
          on: {
            change(picker, values, displayValues) {
              const daysInMonth = new Date(picker.value[0], picker.value[1] * 1 + 1, 0).getDate();
              if (values[2] > daysInMonth) {
                picker.cols[2].setValue(daysInMonth);
              }
            },
          },
        });

        // 年月日时分秒
        self.pickerInline_yyyyMMddhhmm = app.picker.create({
          inputEl: '#demo-picker-yyyyMMddhhmmss',
          rotateEffect: true,
          value: [
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            today.getHours(),
            today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
            today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds(),
          ],
          formatValue(values, displayValues) {
            return ` ${values[0]} ${displayValues[1]} ${values[2]} ${values[3]}:${values[4]}:${values[5]}`;
          },
          cols: [
            // Years
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 1950; i <= 2030; i += 1) { arr.push(i); }
                return arr;
              }()),
            },            
            // Months
            {
              values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
              displayValues: ('January February March April May June July August September October November December').split(' '),
              textAlign: 'left',
            },
            // Days
            {
              values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },

            // Space divider
            {
              divider: true,
              content: '&nbsp;&nbsp;',
            },
            // Hours
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 23; i += 1) { arr.push(i); }
                return arr;
              }()),
            },
            // Divider
            {
              divider: true,
              content: ':',
            },
            // Minutes
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
            // Divider
            {
              divider: true,
              content: ':',
            },
            // Seconds
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
          ],
          on: {
            change(picker, values, displayValues) {
              const daysInMonth = new Date(picker.value[0], picker.value[1] * 1 + 1, 0).getDate();
              if (values[2] > daysInMonth) {
                picker.cols[2].setValue(daysInMonth);
              }
            },
          },
        });

        // 年月日时分
        self.pickerInline_yyyyMMddhhmm = app.picker.create({
          containerEl: '#demo-picker-yyyyMMddhhmm-container',
          inputEl: '#demo-picker-yyyyMMddhhmm',
          toolbar: false,
          rotateEffect: true,
          value: [
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            today.getHours(),
            today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
          ],
          formatValue(values, displayValues) {
            return ` ${values[0]} ${displayValues[1]} ${values[2]} ${values[3]}:${values[4]}`;
          },
          cols: [
            // Years
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 1950; i <= 2030; i += 1) { arr.push(i); }
                return arr;
              }()),
            },            
            // Months
            {
              values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
              displayValues: ('January February March April May June July August September October November December').split(' '),
              textAlign: 'left',
            },
            // Days
            {
              values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },

            // Space divider
            {
              divider: true,
              content: '&nbsp;&nbsp;',
            },
            // Hours
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 23; i += 1) { arr.push(i); }
                return arr;
              }()),
            },
            // Divider
            {
              divider: true,
              content: ':',
            },
            // Minutes
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
          ],
          on: {
            change(picker, values, displayValues) {
              const daysInMonth = new Date(picker.value[0], picker.value[1] * 1 + 1, 0).getDate();
              if (values[2] > daysInMonth) {
                picker.cols[2].setValue(daysInMonth);
              }
            },
          },
        });

        // 年月日
        self.pickerInline_yyyyMMdd = app.picker.create({
          inputEl: '#demo-picker-yyyyMMdd',
          rotateEffect: true,
          value: [
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
          ],
          formatValue(values, displayValues) {
            return `${values[0]} ${displayValues[1]} ${values[2]}`;
          },
          cols: [
            // Years
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 1950; i <= 2030; i += 1) { arr.push(i); }
                return arr;
              }()),
            },            
            // Months
            {
              values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
              displayValues: ('January February March April May June July August September October November December').split(' '),
              textAlign: 'left',
            },
            // Days
            {
              values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
          ],
          on: {
            change(picker, values, displayValues) {
              const daysInMonth = new Date(picker.value[0], picker.value[1] * 1 + 1, 0).getDate();
              if (values[2] > daysInMonth) {
                picker.cols[2].setValue(daysInMonth);
              }
            },
          },
        });

        // 年月
        self.pickerInline_yyyyMM = app.picker.create({
          inputEl: '#demo-picker-yyyyMM',
          rotateEffect: true,
          value: [
            today.getFullYear(),
            today.getMonth(),
          ],
          formatValue(values, displayValues) {
            return `${values[0]} ${displayValues[1]}`;
          },
          cols: [
            // Years
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 1950; i <= 2030; i += 1) { arr.push(i); }
                return arr;
              }()),
            },
            // Months
            {
              values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
              displayValues: ('January February March April May June July August September October November December').split(' '),
              textAlign: 'left',
            },
          ],
        });

        // 时分秒
        self.pickerInline_hhmmss = app.picker.create({
          inputEl: '#demo-picker-hhmmss',
          rotateEffect: true,
          value: [
            today.getHours(),
            today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
            today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds(),
          ],
          formatValue(values, displayValues) {
            return `${values[0]}:${values[1]}:${values[2]}`;
          },
          cols: [
            // Hours
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 23; i += 1) { arr.push(i); }
                return arr;
              }()),
            },
            // Divider
            {
              divider: true,
              content: ':',
            },
            // Minutes
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
            // Divider
            {
              divider: true,
              content: ':',
            },
            // Seconds
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
          ],
        });

        // 时分
        self.pickerInline_hhmm = app.picker.create({
          inputEl: '#demo-picker-hhmm',
          rotateEffect: true,
          value: [
            today.getHours(),
            today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
          ],
          formatValue(values, displayValues) {
            return `${values[0]}:${values[1]}`;
          },
          cols: [
            // Hours
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 23; i += 1) { arr.push(i); }
                return arr;
              }()),
            },
            // Divider
            {
              divider: true,
              content: ':',
            },
            // Minutes
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
          ],
        });

        // 分秒
        self.pickerInline_mmss = app.picker.create({
          inputEl: '#demo-picker-mmss',
          rotateEffect: true,
          value: [
            today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
            today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds(),
          ],
          formatValue(values, displayValues) {
            return `${values[0]}:${values[1]}`;
          },
          cols: [
            // Minutes
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
            // Divider
            {
              divider: true,
              content: ':',
            },
            // Seconds
            {
              values: (function createValues() {
                const arr = [];
                for (let i = 0; i <= 59; i += 1) { arr.push(i < 10 ? `0${i}` : i); }
                return arr;
              }()),
            },
          ],
        });

      },
      onPageBeforeRemove() {
        const self = this;
        self.pickerDevice.destroy();
        self.pickerDescribe.destroy();
        self.pickerDependent.destroy();
        self.pickerCustomToolbar.destroy();
      },
    },
  };
</script>
