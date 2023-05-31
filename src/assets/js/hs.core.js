/*
* HSCore
* @version: 4.0.0 (01 June, 2023)
* @author: UHS
* @event-namespace: .HSCore
* @license: UHS Libraries (https://UHS.com/licenses)
* Copyright 2023 UHS
*/
'use strict';

const HSCore = {
	init: () => {
		// Botostrap Tootltips
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})

		// Bootstrap Popovers
		var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
			return new bootstrap.Popover(popoverTriggerEl)
		})
	},
	components: {}
}

HSCore.init()
