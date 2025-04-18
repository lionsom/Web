#!/bin/bash

# 检查是否提供了目录参数
if [ $# -eq 0 ]; then
    echo "使用方法: $0 <目录路径>"
    exit 1
fi

# 获取目录参数
target_dir="$1"

# 检查目录是否存在
if [ ! -d "$target_dir" ]; then
    echo "错误: 目录 '$target_dir' 不存在"
    exit 1
fi

echo "正在扫描目录: $target_dir"
echo "----------------------------------------"

# 使用 find 命令查找所有目录，并计算它们的大小
find "$target_dir" -type d -exec du -sh {} \; | while read size dir; do
    # 提取大小数值（去掉单位）
    size_num=$(echo "$size" | sed 's/[^0-9.]//g')
    size_unit=$(echo "$size" | sed 's/[0-9.]//g')
    
    # 转换为 MB 进行比较
    if [[ "$size_unit" == "G" ]]; then
        size_mb=$(echo "$size_num * 1024" | bc)
    elif [[ "$size_unit" == "M" ]]; then
        size_mb=$size_num
    elif [[ "$size_unit" == "K" ]]; then
        size_mb=$(echo "$size_num / 1024" | bc)
    else
        size_mb=$(echo "$size_num / 1048576" | bc)
    fi
    
    # 如果大于 10MB，则打印信息
    if (( $(echo "$size_mb > 10" | bc -l) )); then
        echo "大小: $size"
        echo "路径: $dir"
        echo "----------------------------------------"
    fi
done
