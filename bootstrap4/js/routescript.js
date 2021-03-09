var app=angular.module("edzApp",["ngRoute"]);
	//Dashboard scipt
	app.controller('dashboard',function($scope)
			{
				$scope.box=[
				{
					"name":"facebook",
					"link":"",
					"icon":"icons/a.png",
					"bg":"#4a6baa",
					"friends":"300",
					"feeds":"500"
				},
				{
					"name":"twitter",
					"link":"",
					"icon":"icons/b.png",
						"bg":"#00aced",
					"friends":"600",
					"feeds":"300"
				},
				{
					"name":"linkedin",
					"link":"",
					"icon":"icons/c.png",
				
					"bg":"#0077b5",
					"friends":"490",
					"feeds":"100k"

				}];
				$scope.crs=[
					{

						"no":"1",
						"department":"CSE",
						"course":"CSE231"
					},
					{
						"no":"2",
						"department":"CSE",
						"course":"CSE231"
					},
					{
						"no":"3",
						"department":"CSE",
						"course":"CSE202"
					},
					{
						"no":"4",
						"department":"CSE",
						"course":"CSE331"
					},
					{
						"no":"5",
						"department":"CSE",
						"course":"CSE131"
					},
					];
			});
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
					"link":"#!dashboard",
					"access":true,
					"check":false
				
				},
				{
					"name":"LogOut",
					"link":"#!logout",
					"access":false,
					"check":true
				}];
				
				
			}
			$scope.exam=function()
			{
				$scope.nav=[
				{
					"name":"Exam Setup",
					"link":"#!examSetup",
					"access":true,
					"check":false
				},
				{
					"name":"Section Setup",
					"link":"#!sectionSetup",
					"access":false,
					"check":true
				},
				{
					"name":"Exam Signin",
					"link":"#!examSignin",
					"access":true,
					"check":false
				}]
			}
			$scope.mail=function()
			{
				$scope.nav=[
				{
					"name":"SMS Students",
						"link":"#!studentSms",
					"access":true,
					"check":false
				},
				{
					"name":"SMS Staff",
					"link":"#!staffSms",
					"access":true,
					"check":false
				},
				{
					"name":"Manage Webmail Account",
					"link":"#!webmailManage",
					"access":true,
					"check":false
				},
				{
					"name":"Webmail Signin",
					"link":"#!webmailSignin",
					"access":true,
					"check":false
				},
				{
					"name":"SMS Usage Report",
					"link":"#!smsReport",
					"access":true,
					"check":false
				}]
			}
			$scope.student=function()
			{
				$scope.nav=[
				{
					"name":"Student Default",
					"link": "#!studentDefault",
					"access":true,
					"check":false
				},
				{
					"name":"New Student",
					"link":"#!studentNew",
					"access":true,
					"check":false
				},
				{
					"name":"Student List",
					"link":"#!studentList",
					"access":true,
					"check":false
				},
				{
					"name":"Archive List",
					"link":"#!archiveList",
					"access":true,
					"check":false
				},
				{
					"name":"Alumni List",
					"link":"#!alumniList",
					"access":true,
					"check":false
				},
				{
					"name":"Course List",
					"link":"#!courseList",
					"access":true,
					"check":false
				}]
			}
			$scope.staff=function()
			{
				$scope.nav=[
				{
					"name":"Default Info",
					"link":"#!defaultInfo",
					"access":true,
					"check":false
				},
				{
					"name":"New Staff",
					"link":"#!newStaff",
					"access":true,
					"check":false
				},
				{
					"name":"Staff List",
					"link":"#!staffList",
					"access":true,
					"check":false
				},
				{
					"name":"Archived List",
					"link":"#!archivedList",
					"access":true,
					"check":false
				},
				{
					"name":"Personal Portal",
					"link":"#!personalPortal",
					"access":true,
					"check":false
				},
				{
					"name":"Attend a meeting",
					"link":"#!meeting",
					"access":true,
					"check":false
				},
				{
					"name":"Call a meeting",
					"link":"#!call",
					"access":true,
					"check":false
				},
				{
					"name":"Discuss with a colleague",
					"link":"#!discuss",
					"access":true,
					"check":false
				},
				{
					"name":"Payroll",
					"link":"#!payroll",
					"access":false,
					"check":true
				},
				{
					"name":"Reminder",
					"link":"#!reminder",
					"access":true,
					"check":false
				},
				{
					"name":"Logs",
					"link":"#!logs",
					"access":true,
					"check":false
				},
				{
					"name":"Staff Attendance",
					"link":"#!staffAttendance",
					"access":true,
					"check":false
				},
				{
					"name":"Staff Evaluation",
					"link":"#!staffEvaluation",
					"access":true,
					"check":false
				},
				{
					"name":"Course Allocation",
					"link":"#!courseAllocation",
					"access":true,
					"check":false
				},
				{
					"name":"Senate Room",
					"link":"#!senate",
					"access":true,
					"check":false
				},
				{
					"name":"Security",
					"link":"#!security",
					"access":true,
					"check":false
				}]
			}
			$scope.inventory=function()
			{
				$scope.nav=[
				{
					"name":"Inventory Default",
					"link":"#!inventoryDefault",
					"access":false,
					"check":true
				},
				{
					"name":"New Inventory Item",
					"link":"#!newInventory",
					"access":false,
					"check":true
				},
				{
					"name":"View & Edit",
					"link":"#!editInventory",
					"access":false,
					"check":true
				},
				{
					"name":"Purchase Order",
					"link":"#!orderPurchase",
					"access":false,
					"check":true
				},
				{
					"name":"Recieve Inventory",
					"link":"#!inventoryRecieve",
					"access":true,
					"check":false
				}]
			}
			$scope.supply=function()
			{
				$scope.nav=
				[
				{
					"name":"New Supllier",
					"link":"#!newSupplier",
					"access":true,
					"check":false
				},
				{
					"name":"View & Edit",
					"link":"#!editSupplier",
					"access":true,
					"check":false
				}]
			}
			$scope.hostel=function()
			{
				$scope.nav=
				[
				{
					"name":"Hostel Setup",
					"link":"#!hostelSetup",
					"access":true,
					"check":false
				},
				{
					"name":"Apartment",
					"link":"#!apartment",
					"access":true,
					"check":false
				},
				{
					"name":"Add Hostel",
					"link":"#!addHostel",
					"access":false,
					"check":true
				}]
			}
			$scope.report=function()
			{
				$scope.nav=
				[
				{
					"name":"General Ledger",
					"link":"#!generalLedger",
					"access":true,
					"check":false
				},
				{
					"name":"Financial Statement",
					"link":"#!financialStatement",
					"access":false,
					"check":true
				},
				{
					"name":"Account Recievables",
					"link":"#!accountRecievables",
					"access":false,
					"check":true
				},
				{
					"name":"Account Payable",
					"link":"#!accountPayable",
					"access":true,
					"check":false
				},
				{
					"name":"Payroll",
					"link":"#!payroll",
					"access":true,
					"check":false
				},
				{
					"name":"Inventory Report",
					"link":"#!inventoryReport",
					"access":true,
					"check":false
				},
				{
					"name":"Job Report",
					"link":"#!jobReport",
					"access":true,
					"check":false
				},
				{
					"name":"Account Reconcilation",
					"link":"#!accountReconcilation",
					"access":true,
					"check":false
				},
				{
					"name":"Time/Expence Report",
					"link":"#!timeReport",
					"access":false,
					"check":true
				},
				{
					"name":"Company Report",
					"link":"#!companyReport",
					"access":false,
					"check":true
				}
				]
			}
			$scope.account=function()
			{
				$scope.nav=
				[
				{
					"name":"Default",
					"link":"#!accountDefault",
					"access":false,
					"check":true

				},
				{
					"name":"Chart of Accounts",
					"link":"#!accountChart",
					"access":false,
					"check":true
				},
				{
					"name":"Task",
					"link":"#!accountTask",
					"access":false,
					"check":true
				},
				{
					"name":"Fee Setup",
					"link":"#!feeSetup",
					"access":true,
					"check":false
				},
				{
					"name":"Confirm Payment",
					"link":"#!confirmPayment",
					"access":true,
					"check":false
				},
				{
					"name":"Add Charges",
					"link":"#!addCharges",
					"access":true,
					"check":false
				},
				{
					"name":"Charges By Programs",
					"link":"#!programCharges",
					"access":true,
					"check":false
				},
				{
					"name":"Debtors",
					"link":"#!debtors",
					"access":false,
					"check":true
				}]
			}
			$scope.table=function()
			{
				$scope.nav=
				[
				{
					"name":"Timetable Setup",
					"link":"#!timetableSetup",
					"access":true,
					"check":false
				},
				{
					"name":"My Timetable",
					"link":"#!timetable",
					"access":false,
					"check":true
				}]
			}
			$scope.edit=function()
			{
				$scope.nav=
				[
				{
					"name":"Download",
					"link":"#!download",
					"access":true,
					"check":false
				},
				{
					"name":"Upcoming Events",
					"link":"#!events",
					"access":true,
					"check":false
				},
				{
					"name":"News Letter",
					"link":"#!newsletter",
					"access":true,
					"check":false
				},
				{
					"name":"HomePage Images",
					"link":"#!homeImages",
					"access":true,
					"check":false
				}]
			}
			$scope.setting=function()
			{
				$scope.nav=
				[
				{
					"name":"Global Option",
					"link":"#!globalOption",
					"access":true,
					"check":false
				},
				{
					"name":"Custom Option",
					"link":"#!customOption",
					"access":true,
					"check":false
			
				},
				{
					"name":"School Setup",
					"link":"#!schoolSetup",
					"access":true,
					"check":false

				},
				{
					"name":"Backup School Data",
					"link":"#!backup",
					"access":true,
					"check":false
				}]
			}
		});
		app.config(function($routeProvider)
		{
			$routeProvider
			.when("/",{
				templateUrl:"field/dashboard.php"
			})
			.when("/dashboard",{
				templateUrl: "field/dashboard.php"
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
				templateUrl: "field/studentDefault.php"
			})
			.when("/studentNew",{
				templateUrl: "field/studentNew.php"
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
			});
			
		})