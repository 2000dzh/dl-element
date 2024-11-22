import { isDev } from '@dl-element/utils';

const oneMinutes = 1 * 60 * 1000;
const versioned = (url: string) => {
	return new Promise((resolve, reject) => {
		fetch(`${url}?_=${Date.now()}`)
			.then((res) => res.json())
			.then(resolve)
			.catch(reject);
	});
};

export class RefreshBrowserScript {
	url = '/version.json';
	version = (window as any).__version__;
	now = 0;
	status = false;
	__focus__fn__;
	__visibilitychange__fn__;

	constructor() {
		if (isDev) {
			return;
		}
		window.addEventListener(
			'focus',
			(this.__focus__fn__ = this.focus.bind(this))
		);
		document.addEventListener(
			'visibilitychange',
			(this.__visibilitychange__fn__ = this.visibilitychange.bind(this))
		);

		this.execute();
	}

	focus() {
		if (this.now + oneMinutes >= Date.now()) {
			return;
		}

		this.now = Date.now();
		this.execute();
	}

	visibilitychange() {
		if (document.visibilityState !== 'visible') {
			return;
		}
		this.execute();
	}

	async execute() {
		if (this.status) {
			return;
		}
		const version = await this.fetchData();
		const samecase = this.equalVersion(this.version, version);
		if (samecase) {
			return;
		}

		this.throwMessage();
		this.bindEvent();
		this.status = true;
	}

	fetchData() {
		return versioned(this.url);
	}

	equalVersion(privite, resource) {
		return privite.commitId === resource.commitId;
	}

	bindEvent() {
		document.addEventListener('keypress', this.refreshBrowser);
	}

	unbingEvent() {
		document.removeEventListener('keypress', this.refreshBrowser);
	}

	throwMessage() {
		// return ElMessageBox.alert(
		// 	'发现新版本，请刷新浏览器（按任意键刷新页面）。',
		// 	'版本提示',
		// 	{
		// 		type: 'warning',
		// 		showCancelButton: true,
		// 		confirmButtonText: '刷新页面',
		// 		cancelButtonText: '不刷新，继续留在当前页面',
		// 	}
		// )
		// 	.then(this.refreshBrowser)
		// 	.catch(() => {
		// 		this.skipRefresh();
		// 		this.unbingEvent();
		// 	});

		this.refreshBrowser;
	}

	skipRefresh() {
		window.removeEventListener('focus', this.__focus__fn__);
		document.removeEventListener(
			'visibilitychange',
			this.__visibilitychange__fn__
		);
		this.status = false;
	}

	refreshBrowser() {
		window.location.reload();
	}
}
