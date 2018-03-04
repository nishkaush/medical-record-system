import Vue from "vue";
import Header from "@/components/Header/Header.vue";

describe("Header.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Header);
    const vm = new Constructor().$mount();
    expect(
      vm.$el.querySelectorAll(".hidden-sm-and-down button").length
    ).toEqual(4);
  });
});
