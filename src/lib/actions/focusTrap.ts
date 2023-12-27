import * as _focusTrap from 'focus-trap';

export const focusTrap = (element: HTMLElement, options: _focusTrap.Options) => {
	const trap = _focusTrap.createFocusTrap(element, {
		...options,
		clickOutsideDeactivates: true
	});
	trap.activate();

	return {
		destroy() {
			trap.deactivate();
		}
	};
};
