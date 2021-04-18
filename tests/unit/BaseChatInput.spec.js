import { shallowMount } from "@vue/test-utils";
import BaseChatInput from "@/components/baseComponents/BaseChatInput";

describe("BaseChatInput", () => {
  it("emits sendMessage Event when value is valid and enter is pressed", () => {
    const wrapper = shallowMount(BaseChatInput, {
      propsData: {
        value: "Lorem Ipsum",
      },
    });

    wrapper.trigger("keydown.enter");
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.emitted().sendMessage).toBeTruthy();
    });
  });

  it("does not emit sendMessage Event when value is invalid and enter is pressed", () => {
    const wrapper = shallowMount(BaseChatInput, {
      propsData: {
        value: "",
      },
    });

    wrapper.trigger("keydown.enter");
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.emitted().sendMessage).toBeFalsy();
    });
  });
});
