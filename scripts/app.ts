import * as Flexmonster from "flexmonster";

class PivotApp
{
	private pivot: Flexmonster.Pivot;

	constructor()
	{
		this.pivot = new Flexmonster( {
			container: "pivot",
			componentFolder: "../node_modules/flexmonster/",
			toolbar: true,
			licenseKey: "XXX",
			width: "100%",
			height: "500px",
			ready: () => this.onPivotReady()
		} );
	}

	private onPivotReady(): void
	{
		this.pivot.load( "https://cdn.flexmonster.com/reports/report.json" );
	}
}

window.onload = () =>
{
	new PivotApp();
};