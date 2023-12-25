export const tableHeader = [
  'ID',
  'Hình ảnh chính',
  'Tên sản phẩm',
  'giá',
  'miêu tả',
  'Số lượng',
  'Thao tác'
]
export const dataKeys = ['id', 'img', 'name', 'price','desc', 'status', 'action']

export const styleHeader = [
  { minWidth: '' },
  { minWidth: '200px' },
  { minWidth: '150px' },
  { minWidth: '210px' },
  { minWidth: '170px' },
  { minWidth: '150px' },
  { minWidth: '150px' }
]

export const listStatus = [
  {
    label: 'Đang hoạt động',
    value: 'ACTIVE'
  },
  {
    label: 'Đã bị khóa',
    value: 'INACTIVE'
  },
  {
    label: 'Đang chờ duyệt',
    value: 'WAITING_ACCEPTED'
  },
  {
    label: 'Từ chối',
    value: 'REJECTED'
  }
]
