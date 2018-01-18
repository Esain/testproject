import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerInlineComponent } from './banner-inline.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BannerInlineComponent (inline template)', () => {
	let component: BannerInlineComponent;
	let fixture: ComponentFixture<BannerInlineComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	// 异步处理
	beforeEach(async(() => {
		// 测试用的元数据, 类似于@NgModule
		TestBed.configureTestingModule({
			declarations: [BannerInlineComponent]  // declare the test componet
		});
		// 异步编译测试模块中配置的所有组件.编译完成后,外部的组件和css文件会被"内联"
		// 内联模版不必要调用此方法
		// .compileComponents()
	}));

	// 同步
	beforeEach(() => {
		fixture = TestBed.createComponent(BannerInlineComponent); // 创建组件, 同步方法

		component = fixture.componentInstance;  // 获取组件实例

		// 查询h1元素
		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;
	});

	it('should display original title', () => {
		// 通知Angular执行变更检测, 第一个测试程序马上执行
		fixture.detectChanges();
		expect(el.textContent).toContain(component.title);
	});

	it('should display a diffrent test title', () => {
		component.title = 'Test Title';
		fixture.detectChanges();
		expect(el.textContent).toContain('Test Title');
	});
});
