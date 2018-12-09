const onInput = ({ target }) => {
  target.value = target.value.toUpperCase();
};

export default {
  inserted(el) {
    el.addEventListener("input", onInput);
  },
  unbind(el) {
    el.removeEventListener("input", onInput);
  }
};
