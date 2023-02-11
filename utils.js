export function formatDate(dateStr) {
  const date = new Date(dateStr);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
}

export function isFalsy(obj) {

  console.log("isfalsy func",obj);

  Object.values(obj).some((value) => {


    console.log(value);
    
    if (!value) {
      return true;
    }
    return false;
  });
}
