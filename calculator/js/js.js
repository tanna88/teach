		$(document).ready(function() {
			$('.box-calculation').attr('disabled', 'true'); // Vô hiệu hoá ô phép tính
			$('.box-result').attr('disabled', 'true'); // Vô hiệu hoá ô kết quả
			$('.box-button button.times').attr('disabled', 'true'); // Vô hiệu hoá nút nhân
			$('.box-button button.divide').attr('disabled', 'true'); // Vô hiệu hoá nút chia
			$('.box-button button.equal').attr('disabled', 'true'); // Vô hiệu hoá nút bằng
		});

		// Thực hiện các hành động bên trong khi click vào các nút số
		$('.box-button button.number').on('click', function() {
			$char = $(this).html(); // Lấy số vừa click
			$value_calculation = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
			$('.box-calculation').val($value_calculation + $char); // Thêm số vừa click vào sau chuỗi giá trị trong ô phép tính
			$('.box-button button.operation').removeAttr('disabled'); // Gỡ bỏ vô hiệu hoá các nút phép toán
			$('.box-button button.equal').removeAttr('disabled'); // Gỡ bỏ vô hiệu hoá nút bằng
		});

		// Thực hiện các hành động bên trong khi click vào các nút dấu chấm
		$('.box-button button.dot').on('click', function() {
			$char = $(this).html(); // Lấy dấu chấm
			$value_calculation = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
			$('.box-calculation').val($value_calculation + $char); // Thêm dấu chấm vào sau chuỗi giá trị trong ô phép tính
			$('.box-button button.operation').attr('disabled', 'true'); // Vô hiệu hoá các nút phép toán
			$(this).attr('disabled', 'true'); // Vô hiệu hoá nút dấu chấm
		});

		// Thực hiện các hành động bên trong khi click vào các nút CE
		$('.box-button button.refresh').on('click', function() {
			$('.box-calculation').val(''); // Làm trống ô phép tính
			$('.box-result').val(''); // Làm trống ô kết quả
		});

		// Thực hiện các hành động bên trong khi click vào các nút Del
		$('.box-button button.del').on('click', function() {
			$string = $('.box-calculation').val(); // Lấy giá trị trong ô phép tính
			$('.box-calculation').val($string.substring(0, $string.length - 1)); // Xoá ký tự cuối cùng chuỗi giá trị trong ô phép tính
		});

		// Thực hiện các hành động bên trong khi click vào các nút phép toán
		$('.box-button button.operation').on('click', function() {
			$char = $(this).html(); // Lấy dấu phép toán vừa click
			$value_calculation = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
			$('.box-calculation').val($value_calculation + $char); // Thêm dấu phép toán vừa click vào sau chuỗi giá trị trong ô phép tính
			$('.box-button button.times').attr('disabled', 'true'); // Vô hiệu hoá nút nhân
			$('.box-button button.divide').attr('disabled', 'true'); // Vô hiệu hoá nút chia
			$('.box-button button.dot').removeAttr('disabled'); // Gỡ bỏ vô hiệu hoá nút dấu chấm
		});

		// Thực hiện các hành động bên trong khi click vào các nút bằng
		$('.box-button button.equal').on('click', function() {
			$result = $('.box-calculation').val(); // Lấy chuỗi giá trị trong ô phép tính
			$('.box-result').val(eval($result)); // Hiển thị kết quả trong ô kết quả
		});