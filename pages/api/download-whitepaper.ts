import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // 设置响应头为下载文件
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="CODPAL-解决方案白皮书.pdf"');
  
  // 这里应该返回实际的PDF文件内容
  // 由于我们没有实际的PDF文件，我们返回一个简单的文本文件作为示例
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Disposition', 'attachment; filename="CODPAL-解决方案白皮书.txt"');
  
  const whitepaperContent = `
CODPAL 全球私域电商支付与履约解决方案白皮书

一、公司简介
CODPAL是全球领先的私域电商支付与履约解决方案提供商，致力于为全球电商企业提供智能化、一体化的商业解决方案。

二、核心产品
1. 智能品牌系统
   - AI智能决策
   - 品牌策略
   - 营销自动化

2. 数字营销中台
   - 数据分析
   - 营销活动
   - 效果优化

3. 全球出海基础设施
   - 支付系统
   - 物流网络
   - 合规服务

三、解决方案
1. 跨境电商解决方案
   - 全球支付解决方案
   - 多币种结算
   - 合规税务服务
   - 实时汇率转换

2. 品牌出海解决方案
   - 品牌定位策略
   - 全球营销推广
   - 社交媒体管理
   - KOL合作网络

3. 数字营销解决方案
   - 精准用户画像
   - 多渠道数据整合
   - AI营销自动化
   - 实时效果监控

四、市场机遇
- 全球电商市场规模：$6.3万亿
- 跨境贸易增长率：+23.5%
- 数字化支付普及率：89%

五、合作模式
1. 战略投资
   - 股权投资机会
   - 董事会席位
   - 战略资源共享
   - 长期合作保障

2. 合作伙伴
   - 代理分销权
   - 技术支持
   - 营销支持
   - 培训体系

3. 技术合作
   - 技术授权
   - 联合研发
   - 专利共享
   - 技术咨询

六、联系方式
邮箱：pyf@codpal.org
电话：+86 13128878995
地址：深圳市南山区侨城坊T7栋1301

七、企业愿景
让全球电商更简单、更智能、更高效

© 2024 CODPAL. 保留所有权利。
  `;

  res.status(200).send(whitepaperContent);
}
