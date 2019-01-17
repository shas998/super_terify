// setup user data that will be used in the tests

const tarifyPage = {
  KoupitButtons: '.service-listing.js-swipe form table[class="table table-adaptive service-listing-table text-center"] tbody tr td input[value="Koupit"]',
  S: '0',
  M: '1',
  L: '2',
  XL: '3',
  XXL: '4',
  Bootbox: '.bootbox.modal.fade.in',
  BootboxOptions: '.bootbox.modal.fade.in div[class="bootbox-body"] div[class="list-group list-group-modal"] span[class="like-radio"]',
  Nove_cislo: '0',
  Prenest_cislo: '1',
  Prodlouzit_tarif: '2',
  Prejitz: '3',
  LightboxModal: '#lightbox-content .modal-body.bcg-image',
  Lightbox_Close: '#lightbox-content .modal-body.bcg-image button[class="close padding-base"]',
};

const kosikPage = {
  Buybutton: 'a#lwe-buyButton',
  emailfield: 'input#email',
  email: `fake${new Date().getTime()}@email.com`,
  fullNameField: 'input[id="personalAddress.fullName"]',
  fullName: 'Qa Test',
  phoneNoField: 'input[id="phoneNo"]',
  phoneNo: '898956785',
  streetField: 'input[id="personalAddress.fullStreet"]',
  street: `Prujezdna 320`,
  cityField: 'input[id="personalAddress.city"]',
  cityName: `city${new Date().getTime()}`,
  zipCodeField: 'input[id="personalAddress.zipCode"]',
  zipCode: '12234',
  idField: 'input#idCardNo',
  idNo: '998000398',
  birthField: 'input#birthNo',
  birthNo: '4542245696',
  submitButton: '#submitCheckoutForm input[type="submit"]',
};

// export the users you created so you can import them in your tests
export { tarifyPage, kosikPage};
