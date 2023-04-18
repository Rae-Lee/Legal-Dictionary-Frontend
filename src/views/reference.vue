<template>
    <!-- Post preview-->
    <div class="post-preview dashboard">
      <h2 class="post-title"><router-link to="/keywords/references" class="post"><i class="fa-solid fa-angle-left angle"></i></router-link>{{
        reference.name }}</h2>
      <hr class="horizon">
      <div class="content">
        <p v-html="reference.content" class="paragraph"></p>
        <div class="foot"></div>
      </div>
  </div>
</template>
<script>
const dummyData = {
  reference: {
    'id': 1,
    'name': '最高法院 97 年度 台上 字第 892 號刑事判決',
    'content': '\n                                 <div class="htmlcontent"></div>\n                                <div class="text-pre text-pre-in">最高法院刑事判決　　　　　　　九十七年度台上字第八九二號\n<abbr rel="M" id="%e4%b8%8a%e8%a8%b4" class="termhover">上　訴</abbr>　人　甲○○\n上列<abbr rel="M" id="%e4%b8%8a%e8%a8%b4%e4%ba%ba" class="termhover">上訴人</abbr>因違反商業會計法案件，不服台灣高等法院台中分院\n中華民國九十六年十二月三十一日第二審判決（九十六年度上訴\n字第三０八四號，<abbr rel="M" id="%e8%b5%b7%e8%a8%b4" class="termhover">起訴</abbr>案號：台灣彰化地方法院檢察署九十六年\n度偵字第六三二號），提起上訴，本院判決如下：\n    主  文\n原判決撤銷，發回台灣高等法院台中分院。\n    理  由\n依刑事訴訟法第三百五十條、第三百六十一條、第三百六十二條\n、第三百六十七條規定，不服地方法院之第一審判決而上訴者，\n須提出上訴書狀，並應敘述具體理由，為上訴必備之程式；其所\n提出之書狀未敘述<abbr rel="M" id="%e4%b8%8a%e8%a8%b4%e7%90%86%e7%94%b1" class="termhover">上訴理由</abbr>，或僅曾以言詞陳述上訴理由者，均\n應於<abbr rel="M" id="%e4%b8%8a%e8%a8%b4%e6%9c%9f%e9%96%93" class="termhover">上訴<abbr rel="M" id="%e6%9c%9f%e9%96%93" class="termhover">期間</abbr></abbr>屆滿後二十日內補提理由書於第一審法院。第一審\n法院經形式審查，認逾期未補提上訴理由者，應定期間先命補正\n；逾期未補正者，為<abbr rel="M" id="%e4%b8%8a%e8%a8%b4%e4%b8%8d%e5%90%88%e6%b3%95" class="termhover">上訴不合法</abbr>律上之程式，應以<abbr rel="M" id="%e8%a3%81%e5%ae%9a" class="termhover">裁定</abbr>駁回。倘\n已提出上訴理由，但所提非屬具體理由者，則由第二審法院以上\n訴不合<abbr rel="M" id="%e6%b3%95%e5%be%8b" class="termhover">法律</abbr>上之程式，判決駁回。而所謂具體理由，必係依據卷\n內既有訴訟資料或提出新事證，指摘或表明第一審判決有何採證\n認事、用法或量刑等足以影響判決本旨之不當或違法，而構成應\n予撤銷之具體事由，始克當之（例如：依憑<abbr rel="M" id="%e8%ad%89%e6%93%9a" class="termhover">證據</abbr>法則具體指出所\n採證據何以不具<abbr rel="M" id="%e8%ad%89%e6%93%9a%e8%83%bd%e5%8a%9b" class="termhover">證據能力</abbr>，或依憑卷證資料，明確指出所為證據\n<abbr rel="M" id="%e8%ad%89%e6%98%8e%e5%8a%9b" class="termhover">證明力</abbr>之判斷如何違背經驗、<abbr rel="M" id="%e8%ab%96%e7%90%86%e6%b3%95%e5%89%87" class="termhover">論理法則</abbr>）；倘僅泛言原判決認定\n事實<abbr rel="M" id="%e9%8c%af%e8%aa%a4" class="termhover">錯誤</abbr>、違背法令、量刑失之過重或輕縱，而未依<abbr rel="M" id="%e4%b8%8a%e6%8f%ad" class="termhover">上揭</abbr>意旨指\n出具體事由，或形式上雖已指出具體事由，然該事由縱使屬實，\n亦不足以認為原判決有何不當或違法者（例如：對不具有調查必\n要性之證據，法院未依<abbr rel="M" id="%e8%81%b2%e8%ab%8b" class="termhover">聲請</abbr>調查亦未說明理由，或援用證據不當\n，但除去該證據仍應為同一事實之認定），皆<abbr rel="M" id="%e9%9b%a3%e8%ac%82" class="termhover">難謂</abbr>係具體理由，\n俾與第二審上訴制度旨在請求第二審法院撤銷、變更第一審不當\n或違法之判決，以實現個案救濟之立法目的相契合，並節制濫行\n上訴。本件原判決撤銷第一審所為<abbr rel="M" id="%e7%a7%91%e5%88%91" class="termhover">科刑</abbr>之判決，比較行為時及裁\n判時法律，<abbr rel="M" id="%e9%81%a9" class="termhover">適</abbr>用最有利於上訴人甲○○之規定，改判仍從一重論\n處上訴人以明知不實之事項，而填載會計憑證罪刑。上訴人仍表\n不服，於民國九十七年一月九日合法提起第三審上訴。然上訴人\n於九十六年十一月二十三日所提起之第二審上訴，形式上雖提出\n書狀敘述上訴理由，<abbr rel="M" id="%e7%95%a5%e4%bb%a5" class="termhover">略以</abbr>：其未曾設立公司或書立同意書同意他\n人以其名義設立公司，亦與提供不實統一發票之浤榮企業有限公\n司前負責人素不相識，且其受僱於台中市○○路通信行上班係於\n九十年間，非九十二年間，第一審判決據而論處其以明知不實之\n事項，而填載會計憑證罪刑，與事實不符云云，但就第一審判決\n究有何具體事由，致判決不當或違法，並無一語涉及，自非屬得\n上訴第二審之具體理由。依上揭說明，原審應以上訴人之第二審\n上訴不合法律上程式，判決駁回，<abbr rel="M" id="%e4%b9%83" class="termhover">乃</abbr>卻仍撤銷第一審判決，另為\n對上訴人科刑之<abbr rel="M" id="%e5%af%a6%e9%ab%94%e5%88%a4%e6%b1%ba" class="termhover">實體判決</abbr>，其判決自屬違背法令。上訴人之第三\n審上訴雖未指摘及此，但為本院得<abbr rel="M" id="%e4%be%9d%e8%81%b7%e6%ac%8a" class="termhover">依職權</abbr>調查之訴訟程序事項，\n應認原判決有<abbr rel="M" id="%e7%99%bc%e5%9b%9e%e6%9b%b4%e5%af%a9" class="termhover">發回更審</abbr>之原因。\n據上論結，應依刑事訴訟法第三百九十七條、第四百零一條，判\n決如主文。\n中　　華　　民　　國　九十七　年　　三　　月　　六　　日\n                      最高法院刑事第五庭\n                          審判長法官  張　淳　淙\n                                法官  劉　介　民\n                                法官  張　春　福\n                                法官  蔡　彩　貞\n                                法官  林　俊　益\n      本件<abbr rel="M" id="%e6%ad%a3%e6%9c%ac" class="termhover">正本</abbr>證明與<abbr rel="M" id="%e5%8e%9f%e6%9c%ac" class="termhover">原本</abbr>無異\n                                      書  記  官\n中　　華　　民　　國　九十七　年　　三　　月　 十二　 日',
    'fieldId': 2,
    'createdAt': '2023-04-11T03:51:47.000Z',
    'updatedAt': '2023-04-11T03:51:47.000Z',
    'Field': {
      'id': 2,
      'name': '刑事判決',
      'createdAt': '2023-04-10T05:33:42.000Z',
      'updatedAt': '2023-04-10T05:33:42.000Z'
    }
  }
}
export default {
  data () {
    return {
      reference: {}
    }
  },
  created () {
    const { id: referenceId } = this.$route.params
    this.fetchData(referenceId)
  },
  methods: {
    fetchData (referenceId) {
      console.log(referenceId)
      this.reference = dummyData.reference
    }
  }
}
</script>
<style>
/* keyword */
 .dashboard{
  margin-left: 100px;
   margin-right: 100px;
  text-decoration: none;
  padding: 0px;
  color: #535353;
 }
 .post {
 color: #535353;
 padding-right: 50px;
 font-size: 20px;
}

.post-preview {
  text-decoration: none;
}

.post-title {
  font-size: 30px;
  text-decoration: none;
  color: #535353;
  margin-top: 20px;
  margin-bottom: 2px;
}

.post-subtitle {
  margin-top: 30px;
  margin-left: 5px;
  margin-bottom: 30px;
  text-decoration: none;
  color: #789;
}

.horizon{
  width:1350px;
  margin-top:50px;
  margin-bottom:50px;
}
.paragraph{
  white-space: pre-line;
  margin:0 auto;
  font-size:30px;
  padding-left:200px;
}
.content{
  margin-bottom: 5px;
}
.foot{
  height:100px;
}
abbr{
 color:#A48500;
}
</style>
