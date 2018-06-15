import { mount } from "@vue/test-utils";
import HelloWorld from "../../app/components/hello-world.vue";

describe("hello-world.test.js", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(HelloWorld, {
            data() {
                return {
                    message: "Hello"
                };
            }
        });
    });

    it("should have div element", () => {
        expect(wrapper.find("div").exists()).toBe(true);
    });

    it('Header element should have "Hello" text', () => {
        expect(wrapper.find("h1").text()).toBe("Hello");
    });
});
