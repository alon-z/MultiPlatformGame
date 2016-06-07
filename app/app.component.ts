import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
<StackLayout>
    <Button text="Workers"></Button>
    <Button text="Projects"></Button>
</StackLayout>
`,
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public onTap() {
        this.counter--;
    }
}
