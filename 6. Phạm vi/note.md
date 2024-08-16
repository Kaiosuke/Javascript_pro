# Tổng kết bài học

## Loại phạm vu=i

1. Global scope
   - var, let, const, function:
     - Khai báo không nằm trong bất kỳ hàm nào
     - Khai báo không nằm trong bất kỳ block nào
       - Không áp dụng cho var
       - Không áp dụng cho function (Khi nằn ngoài module)
     - Khai báo không nằm trong bất kỳ module nào
2. Function scope
   - var, let, const, function:
     - Khai báo nằm bên trong thân hàm
3. Block scope
   - let, const (Không trong module)
     - Khai báo nằm bên trong block
   - let, const, function(Không trong module)
     - Khai báo nằm bên trong block
4. Module scope
   - var, let, const, function:
     - Khai báo nằm bên trong một module

## Phân loại

- let, const: Có phạm vi khối (Block scope)
- var, function: Có phạm vi hàm (Function scope)

## Từ khóa khai báo

1. var
2. let
3. const
4. function

## Yếu tố cốt lõi

1. Phụ thuộc vào nơi khai báo
2. Phụ thuộc vào tính chất từ khóa khai báo
