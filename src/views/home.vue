<template>
      <div class="s006">
        <form>
          <fieldset>
            <img class="homeIcon" src="../assets/LOGO.png">
            <div class="inner-form">
              <div class="input-field">
                <button class="btn-search" type="button">
                </button>
                <input id="search" type="text" placeholder="輸入想要查詢的詞彙" v-model="keyword" @keyup.enter="fetchKeyword" />
              </div>
            </div>
            <div class="suggestion-wrap">
              <span v-for="keyword in currentKeywords" :key="keyword.id" ><router-link :to="{ name:'keywords articles', params: {id: keyword.id}}" class="keyword">{{keyword.name}}</router-link></span>
            </div>
          </fieldset>
        </form>
      </div>
</template>
<script>
import { errHandler } from '../utils/helpers'
import keywordAPI from './../apis/keywords.js'
export default {
  data () {
    return {
      keyword: '',
      currentKeywords: []
    }
  },
  methods: {
    async fetchKeywords () {
      try {
        // 呼叫後端
        const res = await keywordAPI.getTopKeyword()
        if (res.data.status !== 200) {
          this.currentKeywords = [{
            'id': 1,
            'name': '毒品',
            'created_at': '2023-03-10T04:20:30.000Z',
            'updated_at': '2023-03-10T04:20:30.000Z',
            'count': 2
          },
          {
            'id': 2,
            'name': '刑度',
            'created_at': '2023-03-10T04:20:30.000Z',
            'updated_at': '2023-03-10T04:20:30.000Z',
            'count': 1
          },
          {
            'id': 3,
            'name': '詐欺',
            'created_at': '2023-03-10T04:20:30.000Z',
            'updated_at': '2023-03-10T04:20:30.000Z',
            'count': 1
          },
          {
            'id': 4,
            'name': '洗錢',
            'created_at': '2023-03-13T05:33:55.000Z',
            'updated_at': '2023-03-13T05:33:55.000Z',
            'count': 1
          }]
          return
        }
        this.currentKeywords = res.data.data.keywords
      } catch (err) {
        errHandler({ status: 500 })
      }
    },
    async fetchKeyword () {
      try {
        // 前端驗證
        if (!this.keyword) {
          errHandler({ status: 400, message: ['搜尋欄不可空白！'] })
          return
        }
        // 呼叫後端
        const res = await keywordAPI.addKeyword({ name: this.keyword })
        const { data } = res
        if (data.status !== 200) {
          errHandler(data, this.$router)
          return
        }
        this.$router.push({ name: 'keywords articles', params: { id: data.data.id } })
      } catch (err) {
        errHandler({ status: 500 })
      }
    }
  },
  created () {
    this.fetchKeywords()
  }
}

</script>
<style>
figcaption,
figure,
main {
  /* 1 */
  display: block;
}

/**
 * Add the correct margin in IE 8.
 */
figure {
  margin: 1em 40px;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */
a {
  background-color: transparent;
  /* 1 */
  -webkit-text-decoration-skip: objects;
  /* 2 */
}

/**
 * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */
b,
strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/**
 * Add the correct font style in Android 4.3-.
 */
dfn {
  font-style: italic;
}

/**
 * Add the correct background and color in IE 9-.
 */
mark {
  background-color: #ff0;
  color: #000;
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
audio,
video {
  display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Remove the border on images inside links in IE 10-.
 */
img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */
svg:not(:root) {
  overflow: hidden;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */
/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Remove the default vertical scrollbar in IE.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 */
details,
menu {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Scripting
   ========================================================================== */
/* Hidden
   ========================================================================== */
/**
 * Add the correct display in IE 10-.
 */
[hidden] {
  display: none;
}

html {
  height: 100%;
}

fieldset {
  margin: 0;
  padding: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  -webkit-padding-before: 0;
  -webkit-padding-start: 0;
  -webkit-padding-end: 0;
  -webkit-padding-after: 0;
  border: 0;
}

/*=====  End of Choices  ======*/
* {
  box-sizing: border-box;
}
.homeIcon{
  margin-top:0px;
  width:200px;
  height:200px;
  margin-bottom:30px;
}
.s006 {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.s006 form {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align:center;
  margin-top:0px;
}

.s006 form .inner-form {
  width: 100%;
  margin-bottom: 17px;
}

.s006 form .inner-form .input-field {
  height: 70px;
  width: 100%;
  position: relative;
}

.s006 form .inner-form .input-field input {
  height: 100%;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid #535353;
  background: #fff;
  display: block;
  width: 500px;
  padding: 10px 32px 10px 70px;
  font-size: 18px;
  color: #666;
  border-radius: 34px;
}

.s006 form .inner-form .input-field input.placeholder {
  font-size: 18px;
}

.s006 form .inner-form .input-field input:-moz-placeholder {
  font-size: 18px;
}

.s006 form .inner-form .input-field input::-webkit-input-placeholder {
  font-size: 18px;
}

.s006 form .inner-form .input-field input:hover, .s006 form .inner-form .input-field input:focus {
  box-shadow: none;
  outline: 0;
}

.s006 form .inner-form .input-field .btn-search {
  width: 70px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
  position: absolute;
  left: 0;
  height: 100%;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  align-items: center;
}

.s006 form .inner-form .input-field .btn-search svg {
  fill: #ccc;
  width: 30px;
  height: 30px;
  transition: all .2s ease-out, color .2s ease-out;
}

.s006 form .inner-form .input-field .btn-search:hover, .s006 form .inner-form .input-field .btn-search:focus {
  outline: 0;
  box-shadow: none;
}

.s006 form .inner-form .input-field .btn-search:hover svg, .s006 form .inner-form .input-field .btn-search:focus svg {
  fill: #666;
}

.s006 form .suggestion-wrap {
  padding: 0 15px;
}

.s006 form .suggestion-wrap span {
  font-size: 14px;
  font-family: 'Helvetica', sans-serif;
  display: inline-block;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 15px;
  line-height: 32px;
  color: #fff;
  border-radius: 16px;
  margin-right: 10px;
  margin-bottom: 10px;
}

@media screen and (max-width: 767px) {
  .s006 form .inner-form .input-field {
    margin-bottom: 20px;
    height: 50px;
  }
  .s006 form .inner-form .input-field input {
    padding-left: 55px;
    font-size: 16px;
  }
  .s006 form .inner-form .input-field .btn-search svg {
    width: 26px;
    height: 26px;
  }
}
.keyword{
  text-decoration: none;
  color: white;
}
.keyword:hover{
  color:#A48500;
}
</style>
