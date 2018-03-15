function setTextField(id, text)
{
	var element = document.getElementById(id);

	if (element) {
  		element.value=text;
  		return true;
  	}
  	return false;
}


var textFields = [
['sender', 'abc'],
['emergency11', '010'],
['emergency12', '1234'],
['emergency13', '5678'],
['receiver', 'def'],
['post1', '135'],
['post2', '241'],
['address1', '서울 강남구 개포1동'],
['address2', '아파트'],
['emergency21', '010'],
['emergency22', '1234'],
['emergency23', '5678'],
['emergency31', '010'],
['emergency32', '1234'],
['emergency33', '5678'],
];

var i;
for (i = 0; i < textFields.length; ++i)
{
	var element = document.getElementById(textFields[i][0]);
	if (!element) {
		alert('주문 상품 결제 페이지에서 실행해주세요.')
		return;
	}
}


for (i = 0; i < textFields.length; ++i)
{
	var element = document.getElementById(textFields[i][0]);
	if (element) {
		element.value=textFields[i][1];
	}
}

document.form1.okyak2[0].checked=true;
document.form1.okyak[0].checked=true;
document.form1.radio_paymethod[1].checked=true;
