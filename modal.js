const validateFields = (form, fieldArray) => {
  fieldArray.forEach((element) => {
    element.removeClass("input-error");
    if (element.val().trim() === "") {
      element.addClass("input-error");
    }
  });

  const errorElements = form.find(".input-error");

  return errorElements.length === 0;
};

$(".form").submit((e) => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $("#modal");
  const content = modal.find(".modal__content");

  content.removeClass("error-modal");

  const isValid = validateFields(form, [name, phone, comment, to]);

  if (isValid) {
    $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },
      success: (data) => {
        content.text(data.message);
        $.fancybox.open({
          src: "#modal",
          type: "inline",
        });
        console.log($(form));
        $(form)[0].reset();
      },
      error: (data) => {
        const message = data.responseJSON.message;
        content.text(message);
        content.addClass("error-modal");

        $.fancybox.open({
          src: "#modal",
          type: "inline",
        });
      },
    });
  }
});

$(".app-submit-button").click((e) => {
  e.preventDefault();
  $.fancybox.close();
});
