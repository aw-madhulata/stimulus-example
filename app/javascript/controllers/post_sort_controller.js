import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post-sort"
export default class extends Controller {
	static targets = ["select"];
	connect() {
		// console.log("Hello", this.element);		
		console.log(this.selectTarget.value);
  	}

	update(){
		// console.clear();
		var post_id = this.selectTarget.value;
		var url = "/posts/"+post_id;
		fetch(url, {
			headers: {
				Accept: "text/vnd.turbo-stream.html",
			},

		}).then((response) => response.text()).then((html) => {
			Turbo.renderStreamMessage(html);
		})
	}
}
