(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Gauge Properties</legend>
				<table>
					<tr>
						<td>Title</td>
						<td><input id="bps_title" type="text" maxlength="20"></td>
					</tr>
					<tr>
						<td>Sub Title</td>
						<td><input id="bps_subtitle" type="text" maxlength="20"></td>
					</tr>
					<tr>
						<td>Filter</td>
						<td><textarea id="bps_filter" cols="40" rows="4"></textarea></td>
					</tr>
					<tr>
						<td>Min</td>
						<td><input id="bps_min" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Max</td>
						<td><input id="bps_max" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Width</td>
						<td><input id="bps_width" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Height</td>
						<td><input id="bps_height" type="number" size="5" maxlength="10"></td>
					</tr>
					<hr/>
					
					<tr>
						<td>Red From</td>
						<td><input id="bps_rf" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Red To</td>
						<td><input id="bps_rt" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Green From</td>
						<td><input id="bps_gf" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Green To</td>
						<td><input id="bps_gt" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Yellow From</td>
						<td><input id="bps_yf" type="number" size="5" maxlength="10"></td>
					</tr>
					<tr>
						<td>Yellow To</td>
						<td><input id="bps_yt" type="number" size="5" maxlength="10"></td>
					</tr>
				</table>
				<input type="submit" value="Done">
			</fieldset>
		</form>
		<style>
		:host {
			display: block;
			padding: 1em 1em 1em 1em;
		}
		</style>
	`;

	class BoxBps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							title: this.title,
							subtitle: this.subtitle,
							min: this.min,
							max: this.max,
							redFrom: this.redFrom,
							redTo: this.redTo,
							greenFrom: this.greenFrom,
							greenTo: this.greenTo,
							yellowFrom: this.yellowFrom,
							yellowTo: this.yellowTo,
							width: this.width,
							height: this.height,
							filter: this.filter
						}
					}
			}));
		}

		set title(title) {
			this._shadowRoot.getElementById("bps_title").value = title;
		}		
		set subtitle(subtitle) {
			this._shadowRoot.getElementById("bps_subtitle").value = subtitle;
		}		
		set filter(filter) {
			this._shadowRoot.getElementById("bps_filter").value = filter;
		}		
		set min(min) {
			this._shadowRoot.getElementById("bps_min").value = min;
		}		
		set max(max) {
			this._shadowRoot.getElementById("bps_max").value = max;
		}		
		set width(width) {
			this._shadowRoot.getElementById("bps_width").value = width;
		}		
		set height(height) {
			this._shadowRoot.getElementById("bps_height").value = height;
		}		
		set redFrom(redFrom) {
			this._shadowRoot.getElementById("bps_rf").value = redFrom;
		}		
		set redTo(redTo) {
			this._shadowRoot.getElementById("bps_rt").value = redTo;
		}		
		set greenFrom(greenFrom) {
			this._shadowRoot.getElementById("bps_gf").value = greenFrom;
		}		
		set greenTo(greenTo) {
			this._shadowRoot.getElementById("bps_gt").value = greenTo;
		}		
		set yellowFrom(yellowFrom) {
			this._shadowRoot.getElementById("bps_yf").value = yellowFrom;
		}		
		set yellowTo(yellowTo) {
			this._shadowRoot.getElementById("bps_yt").value = yellowTo;
		}
		//////////////		
		get title() {
			return this._shadowRoot.getElementById("bps_title").value;
		}		
		get subtitle() {
			return this._shadowRoot.getElementById("bps_subtitle").value;
		}		
		get filter() {
			return this._shadowRoot.getElementById("bps_filter").value;
		}		
		get min() {
			return this._shadowRoot.getElementById("bps_min").value;
		}		
		get max() {
			return this._shadowRoot.getElementById("bps_max").value;
		}			
		get width() {
			return this._shadowRoot.getElementById("bps_width").value;
		}		
		get height() {
			return this._shadowRoot.getElementById("bps_height").value;
		}			
		get redFrom() {
			return this._shadowRoot.getElementById("bps_rf").value;
		}		
		get redTo() {
			return this._shadowRoot.getElementById("bps_rt").value;
		}			
		get greenFrom() {
			return this._shadowRoot.getElementById("bps_gf").value;
		}		
		get greenTo() {
			return this._shadowRoot.getElementById("bps_gt").value;
		}			
		get yellowTo() {
			return this._shadowRoot.getElementById("bps_yt").value;
		}		
		get yellowFrom() {
			return this._shadowRoot.getElementById("bps_yf").value;
		}		
	}

	customElements.define("com-sap-sample-google-bps", BoxBps);
})();