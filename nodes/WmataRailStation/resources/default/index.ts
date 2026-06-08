import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "5476364 F 031 F 5909 E 4 Fe 3314",
					"value": "5476364 F 031 F 5909 E 4 Fe 3314",
					"action": "XML - Lines",
					"description": "<h4 class=\"text-primary\">Description</h4>\r\n\r\n<p>Returns information about all rail lines.</p>\r\n\r\n<h4 class=\"text-primary\">Response Elements</h4>\r\n\r\n<table class=\"table table-condensed table-hover\">\r\n<thead>\r\n<tr>\r\n<th class=\"col-md-3\">Element</th>\r\n\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n\r\n<tbody>\r\n<tr>\r\n<td>Lines</td>\r\n\r\n<td>\r\nArray containing line information (<a href=\"#Line\">Line</a>).\r\n</td>\r\n</tr>\r\n\r\n<tr>\r\n<td colspan=\"2\">\r\n<div class=\"text-primary\" style=\"margin-top: 1em\">\r\n<a id=\"Line\" name=\"Line\">Line Elements</a>\r\n</div>\r\n</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>DisplayName</td>\r\n\r\n<td>Full name of line color.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>EndStationCode</td>\r\n\r\n<td>End station code. For example, will be E10 (Greenbelt) for the\r\nGreen Line, B11 (Glenmont) for the Red Line, etc. Use this value in\r\nother rail-related APIs to retrieve data about a station.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>InternalDestination1</td>\r\n\r\n<td>Intermediate terminal station code. During normal service, some\r\ntrains on some lines might end their trip prior to the\r\nStartStationCode or EndStationCode. A good example is on the Red\r\nLine where some trains stop at A11 (Grosvenor) or B08 (Silver\r\nSpring). Empty string if not defined.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>InternalDestination2</td>\r\n\r\n<td>Similar to InternalDestination1.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>LineCode</td>\r\n\r\n<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,\r\nor SV).</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>StartStationCode</td>\r\n\r\n<td>Start station code. For example, will be F11 (Branch Avenue)\r\nfor the Green Line, A15 (Shady Grove) for the Red Line, etc. Use\r\nthis value in other rail-related APIs to retrieve data about a\r\nstation.</td>\r\n</tr>\r\n</tbody>\r\n</table>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/Lines"
						}
					}
				},
				{
					"name": "5476364 F 031 F 5909 E 4 Fe 330 C",
					"value": "5476364 F 031 F 5909 E 4 Fe 330 C",
					"action": "JSON - Lines",
					"description": "<h4 class=\"text-primary\">Description</h4>\r\n\r\n<p>Returns information about all rail lines.</p>\r\n\r\n<h4 class=\"text-primary\">Response Elements</h4>\r\n\r\n<table class=\"table table-condensed table-hover\">\r\n<thead>\r\n<tr>\r\n<th class=\"col-md-3\">Element</th>\r\n\r\n<th>Description</th>\r\n</tr>\r\n</thead>\r\n\r\n<tbody>\r\n<tr>\r\n<td>Lines</td>\r\n\r\n<td>\r\nArray containing line information (<a href=\"#Line\">Line</a>).\r\n</td>\r\n</tr>\r\n\r\n<tr>\r\n<td colspan=\"2\">\r\n<div class=\"text-primary\" style=\"margin-top: 1em\">\r\n<a id=\"Line\" name=\"Line\">Line Elements</a>\r\n</div>\r\n</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>DisplayName</td>\r\n\r\n<td>Full name of line color.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>EndStationCode</td>\r\n\r\n<td>End station code. For example, will be E10 (Greenbelt) for the\r\nGreen Line, B11 (Glenmont) for the Red Line, etc. Use this value in\r\nother rail-related APIs to retrieve data about a station.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>InternalDestination1</td>\r\n\r\n<td>Intermediate terminal station code. During normal service, some\r\ntrains on some lines might end their trip prior to the\r\nStartStationCode or EndStationCode. A good example is on the Red\r\nLine where some trains stop at A11 (Grosvenor) or B08 (Silver\r\nSpring). Empty string if not defined.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>InternalDestination2</td>\r\n\r\n<td>Similar to InternalDestination1.</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>LineCode</td>\r\n\r\n<td>Two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR,\r\nor SV).</td>\r\n</tr>\r\n\r\n<tr>\r\n<td>StartStationCode</td>\r\n\r\n<td>Start station code. For example, will be F11 (Branch Avenue)\r\nfor the Green Line, A15 (Shady Grove) for the Red Line, etc. Use\r\nthis value in other rail-related APIs to retrieve data about a\r\nstation.</td>\r\n</tr>\r\n</tbody>\r\n</table>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/json/jLines"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /Lines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"5476364 F 031 F 5909 E 4 Fe 3314"
					]
				}
			}
		},
		{
			"displayName": "GET /json/jLines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"5476364 F 031 F 5909 E 4 Fe 330 C"
					]
				}
			}
		},
];
