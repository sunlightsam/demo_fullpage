(function(doc, win) {
  var docEl = doc.documentElement,
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      var clientHeight = docEl.clientHeight;
      if (!clientWidth) {
        return;
      }
      var w = 20 * (clientWidth / 375);
      // console.log("w1 = " + w);
      if (w > 40) {
        w = 40;
      }
      // console.log("clientHeight = " + clientHeight);
      // console.log("w2 = " + w);
      docEl.style.fontSize = w + "px";
    };
  if (!doc.addEventListener) {
    return;
  }
  if ("orientationchange" in window) {
    win.addEventListener("orientationchange", recalc, false);
  }
  win.addEventListener("resize", recalc, false);
  win.addEventListener("load", recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
  recalc();
})(document, window);

function runDivCount() {
  var countOptions = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: ""
  };
  // var targetCunt1 = ;
  // console.log(targetCunt1);
  var divCount1 = new CountUp("cnt1", 10, 20, 1, 1, countOptions);
  divCount1.start();
  var divCount2 = new CountUp("cnt2", 100, 900, 0, 1, countOptions);
  divCount2.start();
}

function checkCell(phone) {
  re = /^09[0-9]{8}$/;
  if (!re.test(phone)) {
    // alert("手機，驗證失敗");
    return false;
  }
  return true;
}
function AniPageText() {
  $(".page-text01").waypoint(
    function() {
      $(".page-text01").addClass("animation-bottom-to-top");
    },
    { offset: "50%" }
  );

  $(".page-text02").waypoint(
    function() {
      $(".page-text01").addClass("animation-bottom-to-top");
    },
    { offset: "50%" }
  );

  $(".page-text03").waypoint(
    function() {
      $(".page-text01").addClass("animation-bottom-to-top");
    },
    { offset: "50%" }
  );

  $(".page-text04").waypoint(
    function() {
      $(".page-text01").addClass("animation-bottom-to-top");
    },
    { offset: "50%" }
  );

  $(".page-text05").waypoint(
    function() {
      $(".page-text01").addClass("animation-bottom-to-top");
    },
    { offset: "50%" }
  );
}

function toggleAd(boolean) {
  if (boolean) {
    console.log("fadeIn....");
    $("#main01-ad").fadeIn(1000);
  } else {
    console.log("fadeOut....");
    $("#main01-ad").fadeOut();
  }
}

function addAni(name) {
  removeAni();
  $("div[class^='slide0'],div[class*=' slide0'] " + name).addClass(
    "animation-bottom-to-top"
  );
}

function removeAni() {
  $(".page-text01").removeClass("animation-bottom-to-top");
  $(".page-text02").removeClass("animation-bottom-to-top");
  $(".page-text03").removeClass("animation-bottom-to-top");
  $(".page-text04").removeClass("animation-bottom-to-top");
  $(".page-text05").removeClass("animation-bottom-to-top");
}

function checkIDNO(id) {
  re = /^[A-Z]{1}[0-9]{9}$/;
  if (re.test(id)) {
    // alert("台式身分證，驗證失敗");
    return false;
  }
  return true;
}

function checkEMail(email) {
  re = /^[^\s]+@[^\s]+\.[^\s]+$/;
  if (!re.test(email)) {
    // alert("Email，驗證失敗");
    return false;
  }
  return true;
}

function checkAll(name, sex, phone, email) {
  var rule = "";

  if (name.value.length == "") {
    rule = rule + "\n\n" + "姓名，驗證失敗";
  }
  if (!checkCell(phone.value)) {
    rule = rule + "\n\n" + "手機，驗證失敗";
  }
  if (!checkEMail(email.value)) {
    rule = rule + "\n\n" + "Email,驗證失敗";
  }
  if (rule !== "") {
    alert("失敗!!! >>>" + rule);
  } else {
    alert("送出成功" + rule);
  }
}
