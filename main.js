if (window.location.hash) {
  if (window.location.hash.indexOf("anything") === 1) {
    console.log("Hash contains anything");
  } else {
    console.log("The hash exists but doesn't contain anything");
  }
} else {
  console.log("Hash doesn't contain anything");
}
