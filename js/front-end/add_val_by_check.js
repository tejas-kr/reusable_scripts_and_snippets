// uses jquery

function assign_grade_to_all()  {
	var grade = $('#ass_grade').find(":selected").text();
	var students = $("input[type='text']");

	if ($(".stu_name_chk:checkbox:checked").length > 0) {
		if ($(".sub_name_chk:checkbox:checked").length > 0) {
			
			$(".sub_name_chk:checkbox:checked").each(function () {
				var main_col_name = $(this).attr("name");
				$(".stu_name_chk:checkbox:checked").each(function () {
					var all_td = $(this).parent().nextAll();
					all_td.each(function () {
						all_td.children().each(function () {
							var col_name = $(this).attr("class").split(" ")[1];
							
							if (col_name == main_col_name) {
								// console.log($(this));
								$(this).val(grade);
							}

						});
					});
				});
			});
		} else {

			$(".stu_name_chk:checkbox:checked").each(function () {
				var all_td = $(this).parent().nextAll();
				all_td.each(function () {
					all_td.children().each(function () {

						if ($(this).attr("type") == "text") {
							$(this).val(grade);
						}

					});	
				});
			});
		}

	} else {
		
		students.each(function() {
			if (grade != "Select") {
				$(this).prop("value", grade);
			}
		});

	}

}