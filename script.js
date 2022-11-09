//get date from google tabl appscript
//fetch('https://script.googleusercontent.com/macros/echo?user_content_key=SgMAM072ll_kQqK-4NdzJ4T5I1HlsxCrxjkm_jmHYftgb-5mxmGlFOO-tvEN1Ljc-rY6vBKLAfEKWlvgUq2URWuvokUYuLFBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDpa-ONoKlAsxJnrhkc9PIhsfs3H9QVryliUWlnz9ydv4WKGcThNGTQwC6ZfWr6j8M3eYz-aVWc6GEPLQ_o8LL-cM22rXJx2gg&lib=MoHrWyRNhQJaRE0Uf5Y5L_QTQ_s9QPGmf')
  //  .then(res => res.json())
  //  .then(text => console.log(text))

function handleCredentialResponse(googleUser) {
    setTimeout(() => {
        document.querySelector('.g_id_signin').style.cssText = `opacity: 0;`;
    }, 100)

    var decoded = jwt_decode(googleUser.credential);
    console.log(decoded);

}