		var app=angular.module("myApp",["ngRoute"]);
		app.controller('ctr',function($scope)
		{
			$scope.nav=[
				{
					"name":"Dashboard",
					"link":"#!dashboard"
				},
				{
					"name":"LogOut",
					"link":"#!logout"
				}];
			$scope.home=function()
			{
				$scope.nav=[
				{
					"name":"Dashboard",
					"link":"#!dashboard"
				},
				{
					"name":"LogOut",
					"link":"#!logout"
				}];
			}
			$scope.exam=function()
			{
				$scope.nav=[
				{
					"name":"Exam Setup",
					"link":"#!examSetup"
				},
				{
					"name":"Section Setup",
					"link":"#!sectionSetup"
				},
				{
					"name":"Exam Signin",
					"link":"#!examSignin"
				}]
			}
			$scope.mail=function()
			{
				$scope.nav=[
				{
					"name":"SMS Students",
						"link":"#!studentSms"
				},
				{
					"name":"SMS Staff",
					"link":"#!staffSms"
				},
				{
					"name":"Manage Webmail Account",
					"link":"#!webmailManage"
				},
				{
					"name":"Webmail Signin",
					"link":"#!webmailSignin"
				},
				{
					"name":"SMS Usage Report",
					"link":"#!smsReport"
				}]
			}
			$scope.student=function()
			{
				$scope.nav=[
				{
					"name":"Student Default",
					"link": "#!studentDefault"
				},
				{
					"name":"New Student",
					"link":"#!studentNew"
				},
				{
					"name":"Student List",
					"link":"#!studentList"
				},
				{
					"name":"Archive List",
					"link":"#!archiveList"
				},
				{
					"name":"Alumni List",
					"link":"#!alumniList"
				},
				{
					"name":"Course List",
					"link":"#!courseList"
				}]
			}
			$scope.staff=function()
			{
				$scope.nav=[
				{
					"name":"Default Info",
					"link":"#!defaultInfo"
				},
				{
					"name":"New Staff",
					"link":"#!newStaff"
				},
				{
					"name":"Staff List",
					"link":"#!staffList"
				},
				{
					"name":"Archived List",
					"link":"#!archivedList"
				},
				{
					"name":"Personal Portal",
					"link":"#!personalPortal"
				},
				{
					"name":"Attend a meeting",
					"link":"#!meeting"
				},
				{
					"name":"Call a meeting",
					"link":"#!call"
				},
				{
					"name":"Discuss with a colleague",
					"link":"#!discuss"
				},
				{
					"name":"Payroll",
					"link":"#!payroll"
				},
				{
					"name":"Reminder",
					"link":"#!reminder"
				},
				{
					"name":"Logs",
					"link":"#!logs"
				},
				{
					"name":"Staff Attendance",
					"link":"#!staffAttendance"
				},
				{
					"name":"Staff Evaluation",
					"link":"#!staffEvaluation"
				},
				{
					"name":"Course Allocation",
					"link":"#!courseAllocation"
				},
				{
					"name":"Senate Room",
					"link":"#!senate"
				},
				{
					"name":"Security",
					"link":"#!security"
				}]
			}
			$scope.inventory=function()
			{
				$scope.nav=[
				{
					"name":"Inventory Default",
					"link":"#!inventoryDefault"
				},
				{
					"name":"New Inventory Item",
					"link":"#!newInventory"
				},
				{
					"name":"View & Edit",
					"link":"#!editInventory"
				},
				{
					"name":"Purchase Order",
					"link":"#!orderPurchase"
				},
				{
					"name":"Recieve Inventory",
					"link":"#!inventoryRecieve"
				}]
			}
			$scope.supply=function()
			{
				$scope.nav=
				[
				{
					"name":"New Supllier",
					"link":"#!newSupplier"
				},
				{
					"name":"View & Edit",
					"link":"#!editSupplier"
				}]
			}
			$scope.hostel=function()
			{
				$scope.nav=
				[
				{
					"name":"Hostel Setup",
					"link":"#!hostelSetup"
				},
				{
					"name":"Apartment",
					"link":"#!apartment"
				},
				{
					"name":"Add Hostel",
					"link":"#!addHostel"
				}]
			}
			$scope.report=function()
			{
				$scope.nav=
				[
				{
					"name":"General Ledger",
					"link":"#!generalLedger"
				},
				{
					"name":"Financial Statement",
					"link":"#!financialStatement"
				},
				{
					"name":"Account Recievables",
					"link":"#!accountRecievables"
				},
				{
					"name":"Account Payable",
					"link":"#!accountPayable"
				},
				{
					"name":"Payroll",
					"link":"#!payroll"
				},
				{
					"name":"Inventory Report",
					"link":"#!inventoryReport"
				},
				{
					"name":"Job Report",
					"link":"#!jobReport"
				},
				{
					"name":"Account Reconcilation",
					"link":"#!accountReconcilation"
				},
				{
					"name":"Time/Expence Report",
					"link":"#!timeReport"
				},
				{
					"name":"Company Report",
					"link":"#!companyReport"
				}
				]
			}
			$scope.account=function()
			{
				$scope.nav=
				[
				{
					"name":"Default",
					"link":"#!accountDefault"
				},
				{
					"name":"Chart of Accounts",
					"link":"#!accountChart"
				},
				{
					"name":"Task",
					"link":"#!accountTask"
				},
				{
					"name":"Fee Setup",
					"link":"#!feeSetup"
				},
				{
					"name":"Confirm Payment",
					"link":"#!confirmPayment"
				},
				{
					"name":"Add Charges",
					"link":"#!addCharges"
				},
				{
					"name":"Charges By Programs",
					"link":"#!programCharges"
				},
				{
					"name":"Debtors",
					"link":"#!debtors"
				}]
			}
			$scope.table=function()
			{
				$scope.nav=
				[
				{
					"name":"Timetable Setup",
					"link":"#!timetableSetup"
				},
				{
					"name":"My Timetable",
					"link":"#!timetable"
				}]
			}
			$scope.edit=function()
			{
				$scope.nav=
				[
				{
					"name":"Download",
					"link":"#!download"
				},
				{
					"name":"Upcoming Events",
					"link":"#!events"
				},
				{
					"name":"News Letter",
					"link":"#!newsletter"
				},
				{
					"name":"HomePage Images",
					"link":"#!homeImages"
				}]
			}
			$scope.setting=function()
			{
				$scope.nav=
				[
				{
					"name":"Global Option",
					"link":"#!globalOption"
				},
				{
					"name":"Custom Option",
					"link":"#!customOption"
				},
				{
					"name":"School Setup",
					"link":"#!schoolSetup"
				},
				{
					"name":"Backup School Data",
					"link":"#!backup"
				}]
			}
		});
		app.config(function($routeProvider)
		{
			$routeProvider
			.when("/",{
				templateUrl:"field/dashboard.html",
			})
			.when("/dashboard",{
				templateUrl: "field/dashboard.html"
			})
			.when("/logout",{
				templateUrl: "field/log.html"
			})
			.when("/examSetup",{
				templateUrl: "field/setupExam.html"
			})
			.when("/sectionSetup",{
				templateUrl: "field/setupSection.html"
			})
			.when("/examSignin",{
				templateUrl: "field/examSignin.html"
			})
			.when("/studentSms",{
				templateUrl: "field/studentSms.html"
			})
			.when("/staffSms",{
				templateUrl: "field/staffSms.html"
			})
			.when("/webmailManage",{
				templateUrl: "field/webmanage.html"
			})
			.when("/webmailSignin",{
				templateUrl: "field/weblog.html"
			})
			.when("/smsReport",{
				templateUrl: "field/smsReport.html"
			})
			.when("/studentDefault",{
				templateUrl: "field/studentDefault.html"
			})
			.when("/studentNew",{
				templateUrl: "field/studentNew.html"
			})
			.when("/studentList",{
				templateUrl: "field/studentList.html"
			})
			.when("/archiveList",{
				templateUrl: "field/archiveList.html"
			})
			.when("/alumniList",{
				templateUrl: "field/alumniList.html"
			})
			.when("/courseList",{
				templateUrl: "field/courseList.html"
			})
			.when("/defaultInfo",{
				templateUrl: "field/defaultInfo.html"
			})
			.when("/newStaff",{
				templateUrl: "field/newStaff.html"
			})
			.when("/staffList",{
				templateUrl: "field/staffList.html"
			})
			.when("/archivedList",{
				templateUrl: "field/archivedList.html"
			})
			.when("/personalPortal",{
				templateUrl: "field/personalPortal.html"
			})
			.when("/meeting",{
				templateUrl: "field/meeting.html"
			})
			.when("/call",{
				templateUrl: "field/call.html"
			})
			.when("/discuss",{
				templateUrl: "field/discuss.html"
			})
			.when("/payroll",{
				templateUrl: "field/payroll.html"
			})
			.when("/reminder",{
				templateUrl: "field/reminder.html"
			})
			.when("/logs",{
				templateUrl: "field/logs.html"
			})
			.when("/staffAttendance",{
				templateUrl: "field/staffAtendance.html"
			})
			.when("/staffEvaluation",{
				templateUrl: "field/staffEvaluation.html"
			})
			.when("/courseAllocation",{
				templateUrl: "field/courseAllocation.html"
			})
			.when("/senate",{
				templateUrl: "field/senate.html"
			})
			.when("/security",{
				templateUrl: "field/security.html"
			})
			.when("/inventoryDefault",{
				templateUrl: "field/inventoryDefault.html"
			})
			.when("/newInventory",{
				templateUrl: "field/newInventory.html"
			})
			.when("/editInventory",{
				templateUrl: "field/editInventory.html"
			})
			.when("/orderPurchase",{
				templateUrl: "field/orderPurchase.html"
			})
			.when("/inventoryRecieve",{
				templateUrl: "field/inventoryRecieve.html"
			})
			.when("/newSupplier",{
				templateUrl: "field/newSupplier.html"
			})
			.when("/editSupplier",{
				templateUrl: "field/editSupplier.html"
			})
			.when("/hostelSetup",{
				templateUrl: "field/hostelSetup.html"
			})
			.when("/apartment",{
				templateUrl: "field/apartment.html"
			})
			.when("/addHostel",{
				templateUrl: "field/addHostel.html"
			})
			.when("/generalLedger",{
				templateUrl: "field/ledger.html"
			})
			.when("/financialStatement",{
				templateUrl: "field/financialStatement.html"
			})
			.when("/accountRecievables",{
				templateUrl: "field/accountRecievable.html"
			})
			.when("/accountPayable",{
				templateUrl: "field/accountPayable.html"
			})
			.when("/payroll",{
				templateUrl: "field/payroll.html"
			})
			.when("/inventoryReport",{
				templateUrl: "field/inventoryReport.html"
			})
			.when("/jobReport",{
				templateUrl: "field/jobReport.html"
			})
			.when("/accountReconcilation",{
				templateUrl: "field/accountReconcilation.html"
			})
			.when("/timeReport",{
				templateUrl: "field/timeReport.html"
			})
			.when("/companyReport",{
				templateUrl: "field/companyReport.html"
			})
			.when("/accountDefault",{
				templateUrl: "field/accountDefault.html"
			})
			.when("/accountChart",{
				templateUrl: "field/accountChart.html"
			})
			.when("/accountTask",{
				templateUrl: "field/accountTask.html"
			})
			.when("/feeSetup",{
				templateUrl: "field/feeSetup.html"
			})
			.when("/confirmPayment",{
				templateUrl: "field/confirmPayment.html"
			})
			.when("/addCharges",{
				templateUrl: "field/addCharges.html"
			})
			.when("/programCharges",{
				templateUrl: "field/programCharges.html"
			})
			.when("/debtors",{
				templateUrl: "field/debtors.html"
			})
			.when("/timetableSetup",{
				templateUrl: "field/timetableSetup.html"
			})
			.when("/timetable",{
				templateUrl: "field/timetable.html"
			})
			.when("/download",{
				templateUrl: "field/download.html"
			})
			.when("/events",{
				templateUrl: "field/events.html"
			})
			.when("/newsletter",{
				templateUrl: "field/newsletter.html"
			})
			.when("/homeImages",{
				templateUrl: "field/homeImages.html"
			})
			.when("/globalOption",{
				templateUrl: "field/globalOption.html"
			})
			.when("/customOption",{
				templateUrl: "field/customOption.html"
			})
			.when("/schoolSetup",{
				templateUrl: "field/schoolSetup.html"
			})
			.when("/backup",{
				templateUrl: "field/backup.html"
			})
		})
