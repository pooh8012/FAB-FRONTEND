export const getTotal = (items) => {
  let totalPrice = 0;
  items.forEach((item) => {
    // totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
};

export const handleGoogleSignIn = (url, title) => {
  try {
    localStorage.removeItem("email");
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;
    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;
    const systemZoom = width / window.screen.availWidth;
    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${
        550 / systemZoom
      },top=${top},left=${left}`
    );
    newWindow?.focus();
  } catch (error) {
    console.error(error);
  }
};

// export const getMonthName = (param) => {
//   try {
//     let d = new Date(param);
//     let month = monthNames[d.getMonth()];
//     return month;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getDateInLocaleString = (param) => {
//   try {
//     if (param) {
//       let d = new Date(param + " 00:00:00");
//       let date = d.getDate();
//       if (date.toString()?.length < 2) {
//         date = "0" + date;
//       }
//       let month = getMonthName(param)?.slice(0, 3);
//       let year = d.getFullYear();
//       let localeDate = `${date} ${month}, ${year}`;
//       return localeDate;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getDateInLocaleString = (param) => {
  try {
    if (param) {
      const [year, month, day] = param.split("-");
      const d = new Date(year, month - 1, day);
      const date = d.getDate();
      const monthName = monthNames[d.getMonth()].slice(0, 3);
      const yearStr = d.getFullYear().toString();
      const localeDate = `${date} ${monthName}, ${yearStr}`;
      return localeDate;
    }
  } catch (error) {
    console.error(error);
  }
};
